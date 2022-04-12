import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path = require("path");

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post],
  dbName: "redditdb",
  user: "postgres",
  password: "Test123",
  type: "postgresql",
  debug: !__prod__,
  allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0];
