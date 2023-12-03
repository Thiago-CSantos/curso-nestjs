import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from 'src/courses/courses.entity';

@Injectable()
export class CourseService {
      private courses: Course[] = [
            {
                  id: 1,
                  name: 'NestJS',
                  description: 'Curso sobre fundamentos do framework NestJS',
                  tags: ['node.js', 'nestJS', 'Javascript', 'typescript']
            },
            {
                  id: 20,
                  name: 'Next.js',
                  description: 'Curso sobre fundamentos do framework Next.js',
                  tags: ['node.js', 'Next.js', 'Javascript', 'typescript']
            }
      ];

      findAll() {
            return this.courses;
      }

      findOne(id: number) {
            const course = this.courses.find(a => a.id === id);

            // return course ? { course } : () => { throw new NotFoundException(`curso não encontrado ${id}`); }
            //                      ou
            if(course) {
                  return {course, menssage: 'Sucesso'};
            }
            else{
                  throw new NotFoundException(`curso não encontrado ${id}`);
            }
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
