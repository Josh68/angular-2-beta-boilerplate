/**
 * Created by jas on 4/5/16.
 */
import {Component, OnInit} from 'angular2/core';
import {ListItem} from '../list-item';
import {ShoppingListService} from "./shopping-list.service";
import {FormBuilder, Validators, ControlGroup, Control} from "angular2/common";

@Component({
    selector: 'shopping-list-new-item',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="addItem()">
            <div class="input">
                <label for="item-name">Name</label>
                <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
            </div>
            <div class="input">
                <label for="item-amt">Amount</label>
                <input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']">
            </div>
            <div class="input">
                <button type="submit" [disabled]="!myForm.valid">Add Item</button>
            </div>
        </form>
    `
})
export class ShoppingListNewItemComponent implements OnInit {
    item = {
        name: '',
        amount: 0
    };
    myForm: ControlGroup;
    constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}
    addItem() {
        this._shoppingListService.insertItem({
            name: this.item.name,
            amount: this.item.amount
        });
    }
    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'itemName': ['', Validators.required],
            'itemAmount': ['', Validators.compose([
                Validators.required,
                greaterThanZero
            ])]
        })
    }
}

function greaterThanZero(control: Control): {[s: string]: boolean} {
    if (control.value <= 0) {
        return {notEnough: true}
    }
}
