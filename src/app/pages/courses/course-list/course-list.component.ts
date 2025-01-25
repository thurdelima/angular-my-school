import { HttpResponse } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '@app/services/courses.service';
import { Category, Course } from '@app/shared/models/course';
import { catchError, debounceTime, EMPTY, Observable, Subject, Subscription, takeUntil, tap } from 'rxjs';





@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy {



  public courseList: Course[] = [];
  private courseService = inject(CoursesService);
  private fb = inject(FormBuilder);
  private snackbar = inject(MatSnackBar)
  public sub!: Subscription;
  public courseData!: Observable<any>;




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
    this.form.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      if(value) {
        this.getCourses(this.currentPage, this.pageSize, this.f.category.value, this.f.search.value)
      }
    })
    this.getCourses(1, 5, '', '');
  }


  ngOnDestroy(): void {
    console.log('caiu destroy')
    this.courseList = [];
    this.totalCount = 0;
    if (this.sub) {
      this.sub.unsubscribe(); // Clean up subscriptions
    }
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

    //estrategia pipe async, pra n precisar ficar usando subscribe nas chamadas
    this.courseData = this.courseService
    .get(currentPage, pageSize, category, search)
    .pipe(
      tap((response: HttpResponse<any>) => {
        console.log('API Response:', response);
          this.courseList = response.body as Course[];
          let totalCount = response.headers.get('X-Total-Count');
          this.totalCount = totalCount ? Number(totalCount) : 0;
        }),
        catchError((err: string) => {
          this.snackbar.open(err, 'Close', {
            duration: 5000
          });
          return EMPTY;
        })
    )
    // .subscribe();
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
