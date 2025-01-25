import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {  MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  exports: [

     MatIconModule,
     MatButtonModule,
     MatDividerModule,
     MatCardModule,
     MatSelectModule,
     MatFormFieldModule,
     MatPaginatorModule,
     MatInputModule,




  ],
  declarations: [],
  providers: [
    { provide: MatPaginatorIntl, useValue: customPaginator() }
  ],
})
export class CoursesMaterialModule {}



//for adjust pagina 1 of 10, change name next to próxima, and sfuff like that
function customPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = '';
  customPaginatorIntl.nextPageLabel = 'próxima';
  customPaginatorIntl.previousPageLabel = 'anterior';
  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length }`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
  return customPaginatorIntl;
}
