var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var property_binding_component_1 = require('./property-binding.component');
var AppComponent = (function () {
    function AppComponent() {
        this.name = '';
        this.hobbies = '';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <section class=\"parent\">\n            <h2>This is the parent component</h2>\n            <h4>Please enter your name</h4>\n            <input type=\"text\" [(ngModel)]=\"name\">\n            <br><br>\n            <section class=\"child\">\n                <my-property-binding [myName]=\"name\" [myAge] = \"26\" (hobbiesChanged)=\"hobbies = $event\">\n                </my-property-binding>\n            </section>\n            <p>My hobbies are: {{hobbies}}</p>\n        </section>\n    ",
            directives: [property_binding_component_1.PropertyBindingComponent]
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map