import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModuloModule } from './courses-modulo/courses-modulo.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CoursesModuloModule, DatabaseModule],
  controllers: [AppController, ],
  providers: [AppService,],
})
export class AppModule {}
