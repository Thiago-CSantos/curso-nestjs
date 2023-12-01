import { Injectable } from '@nestjs/common';
import { Course } from 'src/courses/courses.entity';

@Injectable()
export class CourseService {
      private courses: Course[] = [
            {
                  id: 1,
                  name: 'NestJS',
                  description: 'Curso sobre fundamentos do framework NestJS',
                  tags: ['node.js', 'nestJS', 'Javascript', 'typescript']
            }
      ];

      findAll() {
            return this.courses;
      }

      findOne(id: number) {
            return this.courses.filter((a) => a.id === id);
      }

      create(createCourseDTO: any) {
            this.courses.push(createCourseDTO);
      }

      update(id: number, updateCourseDTO: any) {
            const existeCourse = this.courses.find((x) => { return x.id === id });

            if (existeCourse) {
                  const index = this.courses.findIndex((course) => course.id === id);
                  this.courses[index] = {
                        id,
                        ...updateCourseDTO,
                  }
            }
      }

      remove(id: number) {
            const index = this.courses.findIndex((course) => course.id === id);

            if (index >= 0) {
                  this.courses.splice(index, 1);
            }
      }

}
