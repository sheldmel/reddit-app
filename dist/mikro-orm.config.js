"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path = require("path");
exports.default = {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}",
    },
    entities: [Post_1.Post],
    dbName: "redditdb",
    user: "postgres",
    password: "Test123",
    type: "postgresql",
    debug: !constants_1.__prod__,
    allowGlobalContext: true
};
//# sourceMappingURL=mikro-orm.config.js.map