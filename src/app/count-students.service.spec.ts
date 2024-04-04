import { TestBed } from '@angular/core/testing';

import { CountStudentsService } from './count-students.service';

describe('CountStudentsService', () => {
  let service: CountStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate total students', () => {
    const courses = [
      { year: 1, groups: [20, 25] },
      { year: 2, groups: [30, 35, 40] },
      { year: 3, groups: [10] },
      { year: 4, groups: [10, 15] },
      { year: 5, groups: [10, 10, 20] },
    ];
    const result = service.calculateTotalStudents(courses);
    expect(result.length).toEqual(5);
    expect(result[0].totalStudents).toEqual(45); 
    expect(result[1].totalStudents).toEqual(105); 
    expect(result[2].totalStudents).toEqual(10); 
    expect(result[3].totalStudents).toEqual(25); 
    expect(result[4].totalStudents).toEqual(40); 
  });
});
