import { Router, Request, Response } from "express";
import { testConnectionApi } from "../../utils/testConnectionApi";
import { SSR } from "../../middleware/ssr";
import { Home } from "../../../client/view/Home";

const route: Router = Router();

route.get("/", async (req: Request, res: Response) => {
  const { SERVER_STATICS } = process.env;
  const connectionApi = await testConnectionApi();
  const banners = [
    {
      image: SERVER_STATICS + "/imgs/intro-img1.jpg",
      title: "Soluciones para negocios",
      description:
        "The template you will be able to create a site for your business. The template has many different blocks from which you can create your own unique site.",
      link: "/",
      text: "Get in Touch",
      zindex: 1,
    },
    {
      image: SERVER_STATICS + "/imgs/intro-img2.jpg",
      title: "A la medida de tu negocio",
      description:
        "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes.",
      link: "/",
      text: "Get in Touch",
      zindex: 0,
    },
    {
      image: SERVER_STATICS + "/imgs/intro-img3.jpg",
      title: "Cambia tu forma de pensar",
      description:
        "Since our establishment, we have been delivering high-quality and sustainable software solutions for corporate business purposes.",
      link: "/",
      text: "Get in Touch",
      zindex: 0,
    },
  ];
  const data = {
    banners,
    connectionApi,
  } as any;

  SSR({ res, data, Component: Home, view: "home" });
});

export const homeRoutes = route;
