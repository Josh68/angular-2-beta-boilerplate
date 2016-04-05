/**
 * Created by JAS on 3/5/2016.
 */

import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this correct?</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span> and you're <span class="highlight">{{myself.age}}</span> years old. Please confirm if you make any changes to this information.</p>
        <div>
            <label for="name">Your name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label for="age">Your age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid" (click)="onConfirm()">Confirm</button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})

export class ConfirmComponent {
    myself = {name: '', age: ''};
    onKeyup() {
        this.isFilled = (this.myself.name !== '' && this.myself.age !== '');
        this.isValid = (this.isFilled && /^\d{1,3}$/.test(this.myself.age) && /^\D+$/.test(this.myself.name));
    }
    confirmed = new EventEmitter<{name: string, age: string}>();
    isValid = false;
    isFilled = false;
    onConfirm() {
        this.confirmed.emit(this.myself);
    }
}