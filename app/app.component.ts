import { Component } from '@angular/core';

import { HeroParentComponent } from './hero-parent.component';

let directives : any = [
    HeroParentComponent,
]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: directives
})
export class AppComponent { }
