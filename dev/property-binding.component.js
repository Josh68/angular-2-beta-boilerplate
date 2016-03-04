/**
 * Created by JAS on 3/1/2016.
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
var PropertyBindingComponent = (function () {
    function PropertyBindingComponent() {
        this.name = 'Jim';
        this.age = 20;
        this.hobbiesChanged = new core_1.EventEmitter();
    }
    PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
        this.hobbiesChanged.emit(hobbies);
    };
    ;
    __decorate([
        core_1.Input('myAge')
    ], PropertyBindingComponent.prototype, "age");
    PropertyBindingComponent = __decorate([
        core_1.Component({
            selector: 'my-property-binding',
            template: "\n        <h2>This is the child component</h2>\n        <p>Hey, this is {{name}} and I am {{age}} years old!</p>\n        <h4>My hobbies are: </h4>\n        <input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n    ",
            inputs: ['name: myName'],
            outputs: ['hobbiesChanged']
        })
    ], PropertyBindingComponent);
    return PropertyBindingComponent;
})();
exports.PropertyBindingComponent = PropertyBindingComponent;
//# sourceMappingURL=property-binding.component.js.map