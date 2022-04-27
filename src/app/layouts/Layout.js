import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideDrawer from "./SideDrawer";
import AllRoutes from "../routes/Routes";

const Layout = (props) => {
  const [drawer, setDrawer] = useState(false);
  const [search, setSearch] = useState(false);
  console.log(drawer, "sj");
  return (
    <div className={`flex `}>
      <SideDrawer show={drawer} />
      <div className=" w-full">
        <Header
          onShow={() => {
            setDrawer((prev) => !prev);
          }}
          show={drawer}
          onSearch={() => {
            setSearch(true);
          }}
          search={search}
          onSearchCancel={() => {
            setSearch(false);
          }}
        />
        <div
          onClick={() => {
            setDrawer(false);
          }}
        >
          {/* <Header2 /> */}
          <AllRoutes />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
