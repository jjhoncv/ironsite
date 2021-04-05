import express, { Application, Router } from "express";
import cors from "cors";
import { apiRoutes } from "./routes";
import "./utils/config";
import { testConnection } from "./utils/connection";

const App = () => {
  const app: Application = express();

  const middlewares = () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  };

  const routes = () => {
    const router: Router = Router();
    router.use("/api", apiRoutes);
    router.use("/", async (req, res) => {
      res.send("<h3>API</h3><br/>"+await testConnection());
    });
    app.use("/", router);
  };

  const init = () => {
    middlewares();
    routes();
    app.listen(process.env.SERVER_PORT);
    console.log(
      "Server API on " + process.env.SERVER_HOST + ":" + process.env.SERVER_PORT
    );
    (async () => {
      console.info(await testConnection());
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
