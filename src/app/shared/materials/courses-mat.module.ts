import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {  MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  exports: [

     MatIconModule,
     MatButtonModule,
     MatDividerModule,
     MatCardModule,
     MatSelectModule,
     MatFormFieldModule,
    MatInputModule




  ],
  declarations: [],
  providers: [

  ],
})
export class CoursesMaterialModule {}
