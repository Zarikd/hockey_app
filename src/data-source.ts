import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { User } from './entity/User';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
})

AppDataSource.initialize()
  .then(() => {
    console.log('entity is work!')
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))

