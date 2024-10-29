import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '@app/shared/shared.module';
import { StudentsMaterialModule } from '@app/shared/materials/students-mat.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StudentsMaterialModule
  ]
})
export class StudentsModule { }
