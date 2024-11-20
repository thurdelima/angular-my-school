import { NgModule } from '@angular/core';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './materials/material.module';




@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule
  ],
  declarations: [
    ToolbarTitleComponent,
    ToolbarMenuComponent
  ],
  exports: [
    ToolbarTitleComponent,
    ToolbarMenuComponent
  ]
})
export class SharedModule { }
