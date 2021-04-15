import * as React from "react";
import { StyledContainer } from "./../config/StyledContainer";
import { Banner } from "./../components/Banner";
import { Layout } from "./../components/Layout";

export const Home = ({ banners = null, connectionApi = null }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#material-css");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Layout>
      <Banner banners={banners} />
      <StyledContainer>{connectionApi}</StyledContainer>
    </Layout>
  );
};
