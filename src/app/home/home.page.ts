import { Component } from '@angular/core';
import { CountStudentsService } from '../count-students.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  
export class HomePage {
  results: { year: number; totalStudents: number; }[] = [];
  constructor(private calculationService: CountStudentsService) { }

  onCoursesSubmitted(event: any) {
    const courses: { year: number, groups: number[] }[] = event;

    if (!courses || courses.length === 0) {
      console.log('Некоректні дані курсів');
    }

    for (const course of courses) {
      if (!course.groups || course.groups.length === 0) {
        console.log('Некоректні дані курсів');
      }
    }
    
    this.results = this.calculationService.calculateTotalStudents(courses);
  }
}
