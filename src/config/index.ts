import dotenv from "dotenv";
dotenv.config();

const config = {
  app: {
    port: process.env.PORT,
  },
  database: {
    url:process.env.DATABASE_URL,
  },
  upstash: {
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN,
  }
};

export default config;