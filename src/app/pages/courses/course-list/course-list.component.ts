import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  public form!: FormGroup;
  //@ViewChild('categorySelect') categorySelect!: MatSelect;
  @ViewChild(MatSelect) categorySelect!: MatSelect;



  ngOnInit(): void {
    this.validation();
    this.getCourses();
    this.listenToCategoryChanges();
  }

  private validation(): void {
    this.form = this.fb.group({
      category: [''],
      //categorySelected: null,
    });


  }

  public getCourses(): void {
    this.courseService.get().subscribe((response: Course[]) => {
      this.courseList = response;
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

  onCategoryChange(event: any, categorySelect: any): void {
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

      this.getCourses();
    } else {

      this.courseList = this.courseList.filter((course) => course.category === category);
    }
  }

}
