import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountStudentsService {

  constructor() { }

  calculateTotalStudents(courses: { year: number, groups: number[] }[]): { year: number, totalStudents: number }[] {
    const results: { year: number, totalStudents: number }[] = [];

    for (const course of courses) {
      const totalStudents = course.groups.reduce((sum, current) => sum + current, 0);
      results.push({ year: course.year, totalStudents });
    }

    return results;
  }
}
