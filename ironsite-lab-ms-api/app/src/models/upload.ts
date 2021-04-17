import path from "path";
import fse from "fs-extra";

interface FileUpload {
  type: string;
  path: string;
  size: string;
  name: string;
}

const DIRECTORY_UPLOAD = path.join(__dirname, "../public/uploads");

export const uploadFile = (file: FileUpload) => {
  const random = Math.floor(<any>new Date());
  const ext = path.extname(file.name);
  const name = random + ext;

  try {
    fse.moveSync(file.path, path.join(DIRECTORY_UPLOAD, name));
    return name;
  } catch (err) {
    throw new Error(err);
  }
};

export const uploadFiles = (file: FileUpload[]) =>
  Promise.all(file.map(async (file) => uploadFile(file)));
