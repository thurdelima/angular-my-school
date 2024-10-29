import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})
export class ToolbarTitleComponent {

  public iconFa: string = '';
  public iconMat: string= '';

  @Input() title: string = "";


  @Input()
  set icon(value: string) {
    value.includes('fa-') ? this.iconFa = `icon-space-mat ${value}` : this.iconMat = value;

  }




}
