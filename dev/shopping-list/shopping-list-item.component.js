var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var ShoppingListItemComponent = (function () {
    function ShoppingListItemComponent() {
        this.item = { name: '', amount: 0 };
        this.removed = new core_1.EventEmitter();
    }
    ShoppingListItemComponent.prototype.onDelete = function () {
        this.removed.emit(this.item);
    };
    ShoppingListItemComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list-item',
            template: "\n        <div class=\"input\">\n            <label for=\"item-name\">Name</label>\n            <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n        </div>\n        <div class=\"input\">\n            <label for=\"item-amt\">Amount</label>\n            <input type=\"text\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n        </div>\n        <button class=\"danger\" (click)=\"onDelete()\">Delete Item</button>\n    ",
            inputs: ['item'],
            outputs: ['removed']
        })
    ], ShoppingListItemComponent);
    return ShoppingListItemComponent;
})();
exports.ShoppingListItemComponent = ShoppingListItemComponent;
//# sourceMappingURL=shopping-list-item.component.js.map