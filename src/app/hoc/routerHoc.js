import { BrowserRouter } from "react-router-dom";
export const routerHoc = (component) => () => {
  return <BrowserRouter>{component()}</BrowserRouter>;
};
