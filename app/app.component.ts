import { Component } from '@angular/core';

import { HeroParentComponent } from './hero-parent.component';
import {NameParentComponent} from "./name-parent.component";

let directives : any = [
    HeroParentComponent,
    NameParentComponent,
]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: directives
})
export class AppComponent { }
