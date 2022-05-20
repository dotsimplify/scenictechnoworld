import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  const [drawer, setDrawer] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className={`flex `}>
      {/*  <SideDrawer show={drawer} /> */}
      <div className=" w-full">
        <Header
          onShow={() => {
            setDrawer((prev) => !prev);
          }}
          onOpen={() => {
            setDrawer(!drawer);
          }}
          NavBar={drawer}
          showMenu={showDropDown}
          setShowMenu={setShowDropDown}
        />
        <div
          onClick={() => {
            drawer && setDrawer(false);
          }}
        >
          {props.children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
