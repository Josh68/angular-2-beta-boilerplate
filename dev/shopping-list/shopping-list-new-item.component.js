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
var ShoppingListNewItemComponent = (function () {
    function ShoppingListNewItemComponent() {
        this.item = {
            name: '',
            amount: 0
        };
        this.itemAdded = new core_1.EventEmitter();
    }
    ShoppingListNewItemComponent.prototype.addItem = function () {
        this.itemAdded.emit(this.item);
    };
    ShoppingListNewItemComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list-new-item',
            template: "\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n        <button (click)=\"addItem()\">Add Item</button>\n    ",
            outputs: ['itemAdded']
        })
    ], ShoppingListNewItemComponent);
    return ShoppingListNewItemComponent;
}());
exports.ShoppingListNewItemComponent = ShoppingListNewItemComponent;
//# sourceMappingURL=shopping-list-new-item.component.js.map