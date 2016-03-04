import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
    selector: 'my-app',
    template: `
        <section class="parent">
            <h2>This is the parent component</h2>
            <ul>
                <li>
                    <label for="nameInput">Please enter your name</label>
                    <input type="text" [(ngModel)]="name" name="nameInput">
                </li>
                <li>
                     <label for="ageInput">Please enter your age</label>
                     <input type="text" [(ngModel)]="age" name="ageInput">
                </li>
            </ul>
            <section class="child">
                <my-property-binding [myName]="name" [myAge]="age" (hobbiesChanged)="hobbies = $event">
                </my-property-binding>
            </section>
            <p>My hobbies are: {{hobbies}}</p>
        </section>
    `,
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    name = '';
    hobbies = '';
}
