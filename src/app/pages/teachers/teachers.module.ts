
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from '../../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ]
})
export class TeachersModule { }
