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
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';




@NgModule({
  imports: [
    MaterialModule,

    FlexLayoutModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  declarations: [
    ToolbarTitleComponent,

  ],
  exports: [
    ToolbarTitleComponent,
    FlexLayoutModule

  ]
})
export class SharedModule { }
