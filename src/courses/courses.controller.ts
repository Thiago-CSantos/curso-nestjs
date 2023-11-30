import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller("/courses")
export class CoursesController {

      @Get("list/")
      findAll(): string {
            return 'Listagem de cursos';
      }


      @Get(":id")
      findOne(@Param('id') id: String, @Param('name') name: String): string {
            return `Curso com id: ${id}`;
      }

      @Post('create')
      create(@Body() body) {
            return body;
      }
}
