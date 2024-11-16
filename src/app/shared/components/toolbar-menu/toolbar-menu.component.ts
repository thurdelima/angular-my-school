import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {

  @Input() menuTitle: string = '';
  @Input() shadow: boolean = false;
  @Input() popText: boolean = false;

  constructor(){}

  ngOnInit() {
    console.log('menuTitle:', this.menuTitle);
    console.log('shadow:', this.shadow);
    console.log('popText:', this.popText);
  }

}
