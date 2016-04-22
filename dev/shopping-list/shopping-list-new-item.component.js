var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
})();
exports.ShoppingListNewItemComponent = ShoppingListNewItemComponent;
//# sourceMappingURL=shopping-list-new-item.component.js.map