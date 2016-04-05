/**
 * Created by JAS on 3/5/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var ConfirmComponent = (function () {
    function ConfirmComponent() {
        this.myself = { name: '', age: '' };
        this.confirmed = new core_1.EventEmitter();
        this.isValid = false;
        this.isFilled = false;
    }
    ConfirmComponent.prototype.onKeyup = function () {
        this.isFilled = (this.myself.name !== '' && this.myself.age !== '');
        this.isValid = (this.isFilled && /^\d{1,3}$/.test(this.myself.age) && /^\D+$/.test(this.myself.name));
    };
    ConfirmComponent.prototype.onConfirm = function () {
        this.confirmed.emit(this.myself);
    };
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'my-confirm',
            template: "\n        <h1>You submitted the following details. Is this correct?</h1>\n        <p>Your name is <span class=\"highlight\">{{myself.name}}</span> and you're <span class=\"highlight\">{{myself.age}}</span> years old. Please confirm if you make any changes to this information.</p>\n        <div>\n            <label for=\"name\">Your name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Confirm</button>\n    ",
            inputs: ['myself'],
            outputs: ['confirmed']
        })
    ], ConfirmComponent);
    return ConfirmComponent;
})();
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map