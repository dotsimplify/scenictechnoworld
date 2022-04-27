import React from "react";
import Layout from "./app/layouts/Layout";
import { routerHoc } from "./app/hoc/routerHoc";
const App = () => {
  return <Layout />;
};

export default routerHoc(App);
