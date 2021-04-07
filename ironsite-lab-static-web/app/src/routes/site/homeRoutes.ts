import { Router, Request, Response } from "express";
import { testConnectionApi } from "../../utils/testConnectionApi";

const route: Router = Router();

route.get("/", async (req: Request, res: Response) => {
  res.render("pages/index", {
    title: "Express",
    connectionApi: await testConnectionApi(),
  });
});

export const homeRoutes = route;
