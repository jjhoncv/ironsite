import * as fetch from "node-fetch";

export const Banner = () => {
  const getAll = async () => {
    let banners = [];
    const data = await fetch(process.env.API_BANNERS)
      .then((res) => res.json())
      .then((data) => data);

    if (data.status) {
      banners = data.data;
    }

    return banners.map((banner) => ({
      ...banner,
      image: `${process.env.API_ELEMENTS}/${banner.image}`,
      link: "http://",
      text: "See more",
    }));
  };
  return {
    getAll,
  };
};
