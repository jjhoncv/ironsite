import * as React from "react";
import { BannerItem } from "./BannerItem";
import { StyledBanner } from "./styled";

export const Banner = ({ banners }) => {
  const [data, setData] = React.useState(banners);
  const posItemShow = 0;
  const [pos, setPos] = React.useState(posItemShow);
  const [loaded, setLoaded] = React.useState(false);
  const time = 5000;

  const change = (itemPos) => {
    setData(
      banners?.map((item, key) => ({
        ...item,
        zindex: key === itemPos ? 1 : 0,
      }))
    );
  };

  const move = () => {
    setTimeout(()=> {
      const total = data?.length -1;
      if (pos < total) {
        setPos(pos + 1);
      } else {
        setPos(0)
      }
    }, time)
  };

  React.useEffect(() => {
    setLoaded(true);
    move();
  }, []);

  React.useEffect(() => {
    change(pos);
    move();
  }, [pos]);

  return (
    <StyledBanner loaded={loaded}>
      {data?.map((banner, key) => (
        <React.Fragment key={key}>
          <BannerItem banner={banner} />
        </React.Fragment>
      ))}
    </StyledBanner>
  );
};
