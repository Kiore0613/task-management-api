import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'carebook-db-mysql-do-user-8598233-0.b.db.ondigitalocean.com',
  port: 25060,
  username: 'kiore',
  password: 'v781qrp5019obwwc',
  database: 'defaultdb',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
