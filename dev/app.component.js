var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var input_component_1 = require("./bindings/input.component");
var confirm_component_1 = require("./bindings/confirm.component");
var AppComponent = (function () {
    function AppComponent() {
        this.myself = { name: '', age: '' };
        this.confirmedMyself = { name: '', age: '' };
    }
    AppComponent.prototype.onSubmit = function (myself) {
        this.myself = { name: myself.name, age: myself.age };
    };
    AppComponent.prototype.onConfirm = function (myself) {
        this.confirmedMyself = { name: myself.name, age: myself.age };
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"container\">\n            <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n        </div>\n        <div class=\"container\">\n            <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n        </div>\n    ",
            directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map