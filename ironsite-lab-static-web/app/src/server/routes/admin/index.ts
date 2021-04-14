import express, { Router } from "express";
import path from "path";

const route: Router = Router();

route.use("/*", express.static(path.join(__dirname, "./../../public/admin")));

export const adminRoutes = route;