import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  databaseUri?: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  databaseUri: process.env.DATABASE_URI
};

export {config};