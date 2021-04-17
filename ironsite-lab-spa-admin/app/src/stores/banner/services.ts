import { serialize } from "object-to-formdata";

export const create = async (datap) => {
  const data = await fetch(process.env.API_BANNERS, {
    body: serialize(datap),
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};

export const read = async (id = null) => {
  const data = await fetch(process.env.API_BANNERS + (id ? "/" + id : ""), {
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};

export const update = async (id, datap) => {
  const data = await fetch(process.env.API_BANNERS + "/" + id, {
    body: serialize(datap),
    method: "PUT"
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};

export const remove = async (id) => {
  const data = await fetch(process.env.API_BANNERS + "/" + id, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.status) {
    return data.data;
  } else {
    throw new Error(data.message);
  }
};
