export default {
  type: process.env.TYPEORM_CONNECTION,
  port: process.env.TYPEORM_PORT,
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [process.env.TYPEORM_MIGRATIONS],
  entities: [process.env.TYPEORM_ENTITIES],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
};
