import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
      type: 'postgres',
      host: 'localhost', // Use o nome do serviço definido no Docker Compose
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'postgres',
      entities: [],
      synchronize: true,
};

@Module({
      imports: [TypeOrmModule.forRootAsync({
            useFactory: async () => {
                  return {
                        ...dataSourceOptions,
                  }
            }
      })],
})
export class DatabaseModule { }
