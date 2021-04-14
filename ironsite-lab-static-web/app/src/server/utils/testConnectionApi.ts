import * as fetch from "node-fetch";
export const testConnectionApi = async () => {
  try {
    await fetch(process.env.API_PRODUCTS);
    return "Connection to API successfull";
  } catch (e) {
    return "Connection MySQL error" + JSON.stringify(e.message);
  }
};