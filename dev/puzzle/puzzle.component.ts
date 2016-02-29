import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <form name="puzzleForm" (keyup)="testSolvedCheck(puzzleForm.value)" #puzzleForm="ngForm">
            <section class="setup box">
                <h2>Game Setup</h2>
                <label for="name-input">Enter your name please:</label>
                <input name="name-input" type="text" #name (keyup)="0">
            </section>
            <section class="game box" 
                [ngClass]="{
                    solved: solved
                }"
                [ngStyle]="{
                    display: name.value === '' ? 'none' : 'block'
                }">
                <h2>The Puzzle | {{solved ? 'Solved' : 'Not solved'}}
                </h2>
                <p>OK, welcome <span class="name">{{name.value}}</span></p>
                <label for="switch1">Switch 1:</label>
                <input type="text" name="switch1" ngControl="switch1" #switch1><br>
                <label for="switch2">Switch 2:</label>
                <input type="text" name="switch2" ngControl="switch2" #switch2><br>
                <label for="switch3">Switch 3:</label>
                <input type="text" name="switch3" ngControl="switch3" #switch3><br>
                <label for="switch4">Switch 4:</label>
                <input type="text" name="switch4" ngControl="switch4" #switch4><br>
                <label for="test">Test:</label>
                <input type="text" [(ngModel)]="testVal" ngControl="testInput" name="test" (keyup)="testFunc()">
                <p>{{testVal}}</p>
            </section>
            <h2 class="congrats"
                [ngClass] = "{
                    solved: solved
                }"
            >Congratulations, {{name.value}}, you did it!</h2>
        </form>
    `
})

export class PuzzleComponent implements OnInit {
    switch1Number: number; //these are all just type declarations
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;
    testVal: string;
    solved: boolean;
    
    ngOnInit() {
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());
        this.testVal = 'this is a test';
        this.solved = false
        console.log(this.switch1Number);
        console.log(this.switch2Number);
        console.log(this.switch3Number);
        console.log(this.switch4Number);
    }
    
    constructor() {
        this.solved = false;
    }
    
    testFunc() {
        console.log(this.testVal);
    }
    
    testSolvedCheck(formEl) {
        this.solved = false;
        console.log(formEl);
        if (formEl.switch1 === this.switch1Number.toString()
            && formEl.switch2 === this.switch2Number.toString()
            && formEl.switch3 === this.switch3Number.toString()
            && formEl.switch4 === this.switch4Number.toString()) {
                this.solved = true;
            }
    }
}