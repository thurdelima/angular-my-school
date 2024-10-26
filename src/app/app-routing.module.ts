import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule) },
  { path: 'teachers', loadChildren: () => import('./pages/teachers/teachers.module').then(m => m.TeachersModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
