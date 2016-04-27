import {Component} from 'angular2/core';
import {DataDrivenFormComponent} from './data-driven-form.component';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="brand">Forms</div>
        </header>
        <div class="main">
            <my-data-driven-form></my-data-driven-form>
        </div>
    `,
    directives: [DataDrivenFormComponent]
})

export class AppComponent {

}
