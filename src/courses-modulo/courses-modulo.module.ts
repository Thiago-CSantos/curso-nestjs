import { Module } from '@nestjs/common';
import { CourseService } from 'src/course-service/course.service';
import { CoursesController } from 'src/courses/courses.controller';

@Module({
      controllers: [CoursesController],
      providers: [CourseService]
})
export class CoursesModuloModule {

}
