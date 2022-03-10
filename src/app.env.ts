import * as dotenv from 'dotenv';

dotenv.config();

const env = {
  JWT_SECRET: process.env.JWT_HASH_SECRET as string,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN as string,
};

export default Object.freeze(env);
