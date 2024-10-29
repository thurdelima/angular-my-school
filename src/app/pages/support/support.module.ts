import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { SharedModule } from '@app/shared/shared.module';
import { SupportMaterialModule } from '@app/shared/materials/support-mat.module';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SharedModule,
    SupportMaterialModule
  ]
})
export class SupportModule { }
