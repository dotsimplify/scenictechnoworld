import React from "react";
import HeaderLeftSection from "../../components/HeaderLeftSection";
import HeaderRightSection from "../../components/HeaderRightSection";

const Header = (props) => {
  return (
    <div
      className={`bg-sky-500 ${
        props.show ? `` : `w-full`
      }   sticky top-0 z-30 ${!props.search && ""}  `}
    >
      <div className=" flex justify-between items-center relative lg:px-6 ">
        <HeaderLeftSection search={props.search} onShow={props.onShow} />
        <HeaderRightSection />
      </div>
    </div>
  );
};

export default Header;
