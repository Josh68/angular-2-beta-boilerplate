import {Component, EventEmitter, OnInit} from 'angular2/core';
import {ListItem} from '../list-item';
import {ShoppingListService} from "./shopping-list.service";
import {ControlGroup, FormBuilder, Control, Validators} from "angular2/common";

@Component({
    selector: 'shopping-list-item',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onDelete()">
            <div class="input">
                <label for="item-name">Name</label>
                <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
            </div>
            <div class="input">
                <label for="item-amt">Amount</label>
                <input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']">
            </div>
            <div class="input">
                <button type="submit" class="danger" [disabled]="!myForm.valid">Delete Item</button>
            </div>
         </form>
    `,
    inputs: ['item'],
    outputs: ['removed']
})
export class ShoppingListItemComponent implements OnInit {
    item = {name: '', amount: 0};
    myForm: ControlGroup;
    removed = new EventEmitter<ListItem>();
    constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}
    onDelete() {
        this._shoppingListService.deleteItem(this.item);
        this.removed.emit(null);
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