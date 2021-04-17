import { Router, Request, Response } from "express";
import { formWithFiles } from "../../middlewares/formWithFiles";
import { read, create, remove, update } from "../../models/banner";
import { uploadFiles } from "../../models/upload";

const route: Router = Router();

route.get("/:id?", async (req: Request, res: Response) => {
  const id = req.params.id || null;
  try {
    const data = await read(id);

    if (!!data) {
      res.json({
        status: true,
        data,
      });
    } else {
      res.json({
        status: false,
        message: "No se pudo traer el recurso",
      });
    }
  } catch (e) {
    res.json({
      status: false,
      message: e.message,
    });
  }
});

route.delete("/:id?", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await remove(id);

    if (!!data) {
      res.json({
        status: true,
        data,
      });
    } else {
      res.json({
        status: false,
        message: "No se pudo eliminar el recurso",
      });
    }
  } catch (e) {
    res.json({
      status: false,
      message: e.message,
    });
  }
});

route.post("/", formWithFiles, async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const image = await uploadFiles(req.body.image);

    const data = await create({ title, description, image });
    if (!!data) {
      res.json({
        status: true,
        data,
        message: "Registrado satisfactoriamente",
      });
    } else {
      res.json({
        status: false,
        message: "No se pudo registrar el recurso",
      });
    }
  } catch (e) {
    res.json({
      status: false,
      message: e.message,
    });
  }
});

route.put("/:id?", formWithFiles, async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const banner = {
      title: req.body.title,
      description: req.body.description,
    };

    if (req.body?.image?.length > 0) {
      banner["image"] = await uploadFiles(req.body.image);
    }

    const data = await update(banner, id);
    if (!!data) {
      res.json({
        status: true,
        data,
        message: "Actualizado satisfactoriamente",
      });
    } else {
      res.json({
        status: false,
        message: "No se pudo actualizar el recurso",
      });
    }
  } catch (e) {
    res.json({
      status: false,
      message: e.message,
    });
  }
});

export const bannersRoutes = route;
