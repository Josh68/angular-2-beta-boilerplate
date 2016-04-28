"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jas on 4/5/16.
 */
var core_1 = require('angular2/core');
var common_1 = require("angular2/common");
var ShoppingListNewItemComponent = (function () {
    function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
        this._shoppingListService = _shoppingListService;
        this._formBuilder = _formBuilder;
        this.item = {
            name: '',
            amount: 0
        };
    }
    ShoppingListNewItemComponent.prototype.addItem = function () {
        this._shoppingListService.insertItem({
            name: this.item.name,
            amount: this.item.amount
        });
    };
    ShoppingListNewItemComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            'itemName': ['', common_1.Validators.required],
            'itemAmount': ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    greaterThanZero
                ])]
        });
    };
    ShoppingListNewItemComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list-new-item',
            template: "\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"addItem()\">\n            <div class=\"input\">\n                <label for=\"item-name\">Name</label>\n                <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\">\n            </div>\n            <div class=\"input\">\n                <label for=\"item-amt\">Amount</label>\n                <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\">\n            </div>\n            <div class=\"input\">\n                <button type=\"submit\" [disabled]=\"!myForm.valid\">Add Item</button>\n            </div>\n        </form>\n    "
        })
    ], ShoppingListNewItemComponent);
    return ShoppingListNewItemComponent;
}());
exports.ShoppingListNewItemComponent = ShoppingListNewItemComponent;
function greaterThanZero(control) {
    if (control.value <= 0) {
        return { notEnough: true };
    }
}
//# sourceMappingURL=shopping-list-new-item.component.js.map