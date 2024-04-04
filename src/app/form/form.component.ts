import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  courseForm!: FormGroup;
  @Output() coursesSubmitted = new EventEmitter<{ year: number; groups: number[][] }[]>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.courseForm = this.fb.group({
      courses: this.fb.array([this.createCourseForm()]),
    });
  }

  createCourseForm(): FormGroup {
    return this.fb.group({
      groupCount: this.fb.control(0),
      groups: this.fb.array([]),
    });
  }

  onSubmit() {
    const courses: { year: number; groups: number[][] }[] = [];
    const coursesArray = this.courseForm.get('courses') as FormArray;

    coursesArray.controls.forEach((course, index) => {
      const groups = (course.get('groups') as FormArray).controls.map(group => group.value.studentNum);
      courses.push({ year: index + 1, groups });
    });

    this.coursesSubmitted.emit(courses);
  }

  addGroup(courseIndex: number) {
    const coursesArray = this.courseForm.get('courses') as FormArray;
    const course = coursesArray.at(courseIndex).get('groups') as FormArray;
    course.push(this.fb.group({
      studentNum: this.fb.control(0)
    }));
  }
}
  