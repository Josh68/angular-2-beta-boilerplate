import {Component} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
        <h1>Your details, please</h1>
        <div>
            <label for="name">Your name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label for="age">Your age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid">Submit</button>
    `
})

export class InputComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
    onKeyup = function() {
        this.isFilled = (this.myself.name !== '' && this.myself.age !== '');
        this.isValid = (this.isFilled && /^\d{1,3}$/.test(this.myself.age) && /^\D+$/.test(this.myself.name));
    };
}