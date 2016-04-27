/**
 * Created by JAS on 4/26/2016.
 */

import {Component, OnInit} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder, Control} from "angular2/common";

@Component({
    selector: 'my-data-driven-form',
    template: `
        <h2>Sign-up form</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()" #formVar="ngForm">
            <div>
                <label for="email">Email</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="email" #email="ngForm">
                <span class="validation-error" *ngIf="!email.valid">Not valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="text" id="password" #password="ngForm">
                <span class="validation-error" *ngIf="!password.valid">Not valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="text" id="confirm-password" #confirmPassword="ngForm">
                <span class="validation-error" *ngIf="!confirmPassword.valid">Not valid</span>
            </div>
            <button type="submit" [disabled]="!formVar.valid">Submit</button>
        </form>
        <h2>You submitted</h2>
        <div>Mail: {{user.email}}</div>
        <div>Password: {{user.password}}</div>
    `
})
export class DataDrivenFormComponent implements OnInit {
    myForm: ControlGroup;
    user = {email: '', password: ''};
    constructor(private _formBuilder: FormBuilder) {}
    onSubmit(form) {
        console.log(this.myForm);
        this.user = this.myForm.value;
    }
    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'confirmPassword': ['', Validators.required]
        });

    }
}

function hasNumbers(control: Control): {[s: string]: boolean} {
    if (!control.value.match('\\d+')) {
        return {noNumbers: true};
    }
}