
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from '../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesMaterialModule } from '@app/shared/materials/courses-mat.module';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesMaterialModule,
    SharedModule,
  ]
})
export class CoursesModule { }
