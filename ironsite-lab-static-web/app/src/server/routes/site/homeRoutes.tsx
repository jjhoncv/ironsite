import { Router, Request, Response } from "express";
import { SSR } from "../../middleware/ssr";
import { Home } from "../../../client/view/Home";
import { Banner } from "../../model/banner";

const route: Router = Router();

route.get("/", async (req: Request, res: Response) => {
  const data: any = {};

  const banner = Banner();
  data.banners = await banner.getAll();

  SSR({ res, data, Component: Home, view: "home" });
});

export const homeRoutes = route;
