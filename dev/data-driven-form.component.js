/**
 * Created by JAS on 4/26/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require("angular2/common");
var DataDrivenFormComponent = (function () {
    function DataDrivenFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.user = { email: '', password: '' };
    }
    DataDrivenFormComponent.prototype.onSubmit = function (form) {
    };
    DataDrivenFormComponent.prototype.ngOnInit = function () {
        this.myForm = this._formBuilder.group({
            'email': ['', common_1.Validators.required],
            'password': ['', common_1.Validators.required],
            'confirmPassword': ['', common_1.Validators.required]
        });
    };
    DataDrivenFormComponent = __decorate([
        core_1.Component({
            selector: 'my-data-driven-form',
            template: "\n        <h2>Sign-up form</h2>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div>\n                <label for=\"email\">Email</label>\n                <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"email\">\n                <span class=\"validation-error\">Not valid</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\">\n                <span class=\"validation-error\">Not valid</span>\n            </div>\n            <div>\n                <label for=\"confirm-password\">Confirm password</label>\n                <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\">\n                <span class=\"validation-error\">Not valid</span>\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.email}}</div>\n        <div>Password: {{user.password}}</div>\n    "
        })
    ], DataDrivenFormComponent);
    return DataDrivenFormComponent;
}());
exports.DataDrivenFormComponent = DataDrivenFormComponent;
//# sourceMappingURL=data-driven-form.component.js.map