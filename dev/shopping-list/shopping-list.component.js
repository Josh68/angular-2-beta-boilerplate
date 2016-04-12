"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jas on 4/4/16.
 */
var core_1 = require('angular2/core');
var shopping_list_new_item_component_1 = require('./shopping-list-new-item.component');
var shopping_list_item_component_1 = require('./shopping-list-item.component');
var ShoppingListComponent = (function () {
    function ShoppingListComponent() {
        this.listItems = new Array();
    }
    ShoppingListComponent.prototype.onItemAdded = function (item) {
        this.listItems.push({
            name: item.name,
            amount: item.amount
        });
    };
    ShoppingListComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ShoppingListComponent.prototype.onRemove = function (item) {
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list',
            template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">\n                        {{listItem.name}} ({{listItem.amount}})\n                    </li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n        </section>\n    ",
            directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
        })
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map