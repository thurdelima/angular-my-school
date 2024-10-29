
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from '../../shared/shared.module';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersMaterialModule } from '@app/shared/materials/teachers-mat.module';
import { TeachersComponent } from './teachers.component';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialModule,
    SharedModule
  ]
})
export class TeachersModule { }
