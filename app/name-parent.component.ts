import { Component,Input } from '@angular/core';

import { NameChildComponent } from './name-child.component';

@Component({
    selector : name-parent,
    template : `
    <h2>Master controls {{ name.length }} names</h2>
    <name-child *ngFor="let name of names"
       [name] = "name"
    >
</name-child>
    `,
    directives : [NameChildComponent]
})

export class NameParentComponent{
    names = ['Mr.Q','  ','   sdsa d '];
}