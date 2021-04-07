import * as React from "react";
import { Layout } from "../layouts";
import { StyledConnection } from "./styled";

export default function index({ title, connectionApi }) {
  return (
    <Layout title={title}>
      <StyledConnection>{connectionApi}</StyledConnection>
    </Layout>
  );
}
