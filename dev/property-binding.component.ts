/**
 * Created by JAS on 3/1/2016.
 */

import {Component, EventEmitter, Input} from 'angular2/core';
import {Event} from "../node_modules/typescript/lib/lib";

@Component({
    selector: 'my-property-binding',
    template: `
        <h2>This is the child component</h2>
        <p>Hey, this is {{name}} and I am {{age}} years old!</p>
        <h4>My hobbies are: </h4>
        <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
    `,
    inputs ['name: myName'],
    outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent {
    name = '';
    @Input('myAge') age = 20;
    hobbiesChanged = new EventEmitter<string>();
    onHobbiesChanged(hobbies: string) {
        this.hobbiesChanged.emit(hobbies);
    };
}
