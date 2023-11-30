import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller("/courses")
export class CoursesController {

      @Get("")
      findAll(@Res() response) {
            return response.status(200).json({ mensagem: 'Listagem de cursos' });
      }


      @Get(":id")
      findOne(@Param('id') id: String, @Param('name') name: String): string {
            return `Curso com id: ${id}`;
      }

      @Post('create')
      create(@Body() body) {
            return body;
      }

      @Patch("atualizar/:id")
      update(@Param("id") id: String, @Body() body) {
            console.log(body);

            return `Update curso ID ${id}, ${body.name}`
      }

      @Delete("deletar/:id")
      remover(@Param('id') id: String, @Res() response){
            return response.status(HttpStatus.NO_CONTENT).send(`Delete curso ID ${id}`)
      }

}
