import React from "react";
import { officeBusiness } from "../../usefulData/officeBussiness";
import { officeEnterprise } from "../../usefulData/officeBussiness";
import TableTopRow from "./TableTopRow";

const ApplicationTable = (props) => {
  return (
    <div className=" w-full animate-fade-in-down">
      <TableTopRow
        firstRow={props.type == "Business" ? officeBusiness : officeEnterprise}
      />
      <div>
        {props.ApplicationList.map((item, index) => (
          <div className="   flex items-center">
            <div className=" flex items-center  h-12 w-1/2 border-r border-l px-4 ">
              <img src={item.icon} className=" h-8 w-8 " />
              {item.name}
            </div>
            <div className=" w-1/4 flex justify-center border-r text-sm  py-3 px-2">
              {item.ProPlus}
            </div>
            <div className=" w-1/4 flex justify-center border-r text-sm py-3 px-2">
              {item.E1}
            </div>
            <div className=" w-1/4  flex justify-center border-r text-sm py-3 px-2">
              {item.E3}
            </div>
            <div className=" w-1/4 flex justify-center border-r text-sm py-3 px-2">
              {item.E6}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTable;
