import { Pool } from 'pg';

let conn:Pool | undefined;

type PoolConfig = {
  user: string | undefined,
  password: string | undefined,
  host: string | undefined,
  port: number,
  database: string | undefined
}

const poolConfig:PoolConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  database: process.env.DB_NAME
}

if (!conn) {
  conn = new Pool(poolConfig)
}

export default conn;