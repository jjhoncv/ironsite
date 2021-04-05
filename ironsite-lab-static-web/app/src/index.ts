import express, { Application, Router } from "express";
import cors from "cors";
import { siteRoutes } from "./routes";
import path from "path";
import { testConnectionApi } from "./utils/testConnectionApi";

const App = () => {
  const app: Application = express();

  const middlewares = () => {
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "pug");
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "public/assets")));
  };

  const routes = () => {
    const router: Router = Router();
    router.use("/", siteRoutes);
    app.use("/", router);
  };

  const init = () => {
    middlewares();
    routes();
    app.listen(process.env.SERVER_PORT);
    console.log(
      "Server WEB on " + process.env.SERVER_HOST + ":" + process.env.SERVER_PORT
    );
    (async () => {
      console.info(await testConnectionApi());
    })()
  };

  return {
    init,
  };
};

async function main() {
  const app = App();
  app.init();
}

main();
