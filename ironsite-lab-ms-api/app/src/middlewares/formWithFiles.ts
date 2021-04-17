import { IncomingForm, File } from "formidable";
import { Request, Response } from "express";

export const formWithFiles = (req: Request, res: Response, next: Function) => {
  const form = new IncomingForm();
  const body = {};
  form.parse(req);
  form
    .on("file", (name, file: File) => {
      name = name.replace(/\[.\]/gi, "");
      if (body.hasOwnProperty(name)) {
        body[name].push(file);
      } else {
        body[name] = [file];
      }
    })
    .on("field", (name, field) => {
      body[name] = field;
    })
    .on("error", (err) => {
      next(err);
    })
    .on("end", () => {
      req.body = body;
      next();
    });
};
