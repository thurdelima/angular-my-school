import { HttpResponse } from '@angular/common/http';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';





@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {



  public courseList: Course[] = [];
  private courseService = inject(CoursesService);
   private fb = inject(FormBuilder);

  public categoryValue  = [
    { id: 1, value: 'Tecnologia' },
    { id: 2, value: 'Arte' },
    { id: 3, value: 'Culinária' },
    { id: 4, value: 'Finanças' },
    { id: 5, value: 'Psicologia' },
    { id: 6, value: 'Marketing' },
    { id: 7, value: 'Fotografia' },
    { id: 8, value: 'Escrita' },
    { id: 9, value: 'Música' },
    { id: 10, value: 'Ciências Ambientais' },
    { id: 11, value: 'Moda' },
    { id: 12, value: 'Comunicação' },
    { id: 13, value: 'Filosofia' },
    { id: 14, value: 'Saúde' },
  ];
  //public categoryValue = Object.values(Category)
  public selectedValue: string = '';


  public totalCount: number = 0;
  public currentPage: number = 1;
  public pageSize: number = 5;


  public form!: FormGroup;
  //@ViewChild('categorySelect') categorySelect!: MatSelect;
  @ViewChild(MatSelect) categorySelect!: MatSelect;



  ngOnInit(): void {
    this.buildForm();
    //this.listenToCategoryChanges();
    this.form.valueChanges.subscribe((value) => {
      if(value) {
        this.getCourses(this.currentPage, this.pageSize, this.f.category.value, this.f.search.value)
      }
    })
    this.getCourses(1, 10, '', '');
  }

  get f(): any {
    return this.form.controls;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      category: [''],
      search: ['']
      //categorySelected: null,
    });


  }

  public doSearch(): void {
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }


  public getCourses(currentPage: number, pageSize: number, category: string, search: string): void {
    this.courseService.get(currentPage, pageSize, category, search).subscribe((response: HttpResponse<any>) => {
      console.log('response: ', response.headers.get)
      this.courseList = response.body as Course[];
      console.log(' this.courseList: ', response);
      let totalCount = response.headers.get('X-Total-Count');
      console.log('totalCoount: ', totalCount)
      this.totalCount = totalCount ? Number(totalCount) : 0;
    })
  }

  private listenToCategoryChanges(): void {
    this.form.get('category')?.valueChanges.subscribe((selectedCategory: string) => {
      console.log('Selected category:', selectedCategory);
      this.form.get('categorySelected')?.setValue(selectedCategory);

      this.filterCoursesByCategory(selectedCategory);


        // this.categorySelect.close();


    });
  }


  public onCategoryChange(event: any, categorySelect: any): void {
    const selectedCategory = event.value;
    this.form.get('categorySelected')?.setValue(selectedCategory);
    console.log('Selected category:', selectedCategory);

    // Force close the dropdown
    this.categorySelect.close();
  }

  // public onCategoryChange(event: any): void {
  //   const selectedCategory = event.value;

  //   // Update the selected value
  //   this.form.get('categorySelected')?.setValue(selectedCategory);

  //   // Filter courses based on the category
  //   this.filterCoursesByCategory(selectedCategory);
  // }


  // onCategoryChange(event: any): void {
  //   const selectedCategory = event.value; // Get the selected value
  //   this.selectedValue = selectedCategory;
  //   this.form.get('categorySelected')?.setValue(selectedCategory); // Set it to another control
  //   console.log('Selected category:', selectedCategory);
  // }


  private filterCoursesByCategory(category: string): void {

    console.log(category)
    if (!category) {

      //this.getCourses();
    } else {

      this.courseList = this.courseList.filter((course) => course.category === category);
    }
  }


  public handlePageEvent(e: PageEvent): void {
    console.log(e)
    this.currentPage = (e.pageIndex + 1);
    this.pageSize = e.pageSize;
    this.getCourses(
      this.currentPage,
      this.pageSize,
      this.f.category.value ?? '',
      this.f.search.value ?? ''
    );
  }

}
