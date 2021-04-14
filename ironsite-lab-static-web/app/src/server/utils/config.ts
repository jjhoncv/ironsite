import * as dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import path from "path";

const fileEnv = process.env.NODE_ENV ? "" : ".local";
const pathEnv = path.join(__dirname, "./../../../.env" + fileEnv);

dotenvExpand(dotenv.config({ path: pathEnv }));