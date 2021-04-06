import express, { Application, Router } from "express";
import cors from "cors";
import { siteRoutes, adminRoutes } from "./routes";
import path from "path";
import "./utils/config";
import { testConnectionApi } from "./utils/testConnectionApi";

const App = () => {
  const app: Application = express();

  const middlewares = () => {
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "pug");
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  };
  
  const routes = () => {
    const router: Router = Router();
    router.use("/admin", adminRoutes);
    router.use("/", siteRoutes);
    app.use("/", router);
    app.use(express.static(path.join(__dirname, "public/admin")));
    app.use(express.static(path.join(__dirname, "public/assets")));
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
    })();
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
