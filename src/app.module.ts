import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModuloModule } from './courses-modulo/courses-modulo.module';

@Module({
  imports: [CoursesModuloModule],
  controllers: [AppController, ],
  providers: [AppService,],
})
export class AppModule {}
