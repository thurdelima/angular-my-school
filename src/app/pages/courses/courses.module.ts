
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from '../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesMaterialModule } from '@app/shared/materials/courses-mat.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,

  ],
  imports: [
    CoursesMaterialModule,
    CommonModule,
    CoursesRoutingModule,
    MatPaginatorModule,
    SharedModule,
    NgxPaginationModule





  ]
})
export class CoursesModule { }
