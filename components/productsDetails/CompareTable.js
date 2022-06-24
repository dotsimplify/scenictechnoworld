import React from "react";
import { officeBusiness } from "../../usefulData/officeBussiness";
import { officeEnterprise } from "../../usefulData/officeBussiness";
import TableTopRow from "./TableTopRow";

const CompareTable = (props) => {
  // alert(props.type);
  return (
    <div className={` w-full animate-fade-in-down`}>
      <TableTopRow
        firstRow={props.type == "Business" ? officeBusiness : officeEnterprise}
      />
      <div className="">
        {props.description.map((item, index) => (
          <div key={index} className={` flex mt-4 ${index % 2 && ``} `}>
            <div className=" w-1/2 pl-6">{item.keyPoint}</div>
            <div className="w-1/4 flex justify-center ">{item.plus}</div>
            <div className="w-1/4 flex justify-center ">{item.E1}</div>
            <div className="w-1/4 flex justify-center ">{item.E3}</div>
            <div className="w-1/4 flex justify-center ">{item.E6}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareTable;
