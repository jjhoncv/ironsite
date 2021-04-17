import express, { Router } from "express";
import path from "path";

import { authRoutes } from "./authRoutes";
import { errorRoutes } from "./errorRoutes";
import { homeRoutes } from "./homeRoutes";
import { productsRoutes } from "./productsRoutes";
import { bannersRoutes } from "./bannersRoutes";

const route: Router = Router();
route.use("/uploads", express.static(path.join(__dirname, "../../public/uploads")));
route.use("/auth", authRoutes);
route.use("/products", productsRoutes);
route.use("/banners", bannersRoutes);
route.use("/", homeRoutes);
route.use("*", errorRoutes);

export const apiRoutes = route;

