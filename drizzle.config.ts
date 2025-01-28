import { config as dotConfig} from "dotenv";
import { defineConfig } from "drizzle-kit";
import config from './src/config';

dotConfig({ path: ".env" });

export default defineConfig({
  schema: "./src/db/schema",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: config.database.url!,
  },
});