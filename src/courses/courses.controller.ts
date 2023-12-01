import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { CourseService } from 'src/course-service/course.service';

@Controller("/courses")
export class CoursesController {
      // injeção de dependecia do service
      constructor(private readonly service: CourseService) {
      }


      @Get("")
      findAll() {
            return this.service.findAll();
      }


      @Get(":id")
      findOne(@Param('id') id: number) {
            return this.service.findOne(+id);
            //Em TypeScript, o sinal de + antes de uma variável é usado para converter a variável para o tipo number. Isso é 
            //chamado de operador de unário de adição, e quando usado antes de uma variável do tipo string, 
            //tenta converter essa string em um número.
      }

      @Post('create')
      create(@Body() body) {
            return this.service.create(body);
      }

      @Put("atualizar/:id")
      update(@Param("id") id: number, @Body() body) {
            return this.service.update(+id, body);
      }

      @Delete("deletar/:id")
      remover(@Param('id') id: number) {
            this.service.remove(+id);
            return;
      }

}
