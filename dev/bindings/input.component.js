var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var InputComponent = (function () {
    function InputComponent() {
        this.myself = { name: '', age: '' };
        this.isFilled = false;
        this.isValid = false;
        this.submitted = new core_1.EventEmitter();
    }
    InputComponent.prototype.onKeyup = function () {
        this.isFilled = (this.myself.name !== '' && this.myself.age !== '');
        this.isValid = (this.isFilled && /^\d{1,3}$/.test(this.myself.age) && /^\D+$/.test(this.myself.name));
    };
    ;
    InputComponent.prototype.onSubmit = function () {
        this.submitted.emit(this.myself);
    };
    InputComponent = __decorate([
        core_1.Component({
            selector: 'my-input',
            template: "\n        <h1>Your details, please</h1>\n        <div>\n            <label for=\"name\">Your name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n    ",
            inputs: ['myself'],
            outputs: ['submitted']
        })
    ], InputComponent);
    return InputComponent;
})();
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map