import React, { useState } from "react";
import { keyPoints } from "../../dummy/productsKey";
import { MdArrowRight } from "react-icons/md";
import {
  description,
  enterpriseApplicationData,
  relabilityData,
  securityData,
} from "../../dummy/officeEnterpriseData";
import CompareTable from "./CompareTable";
import SecurityTable from "./SecurityTable";
import RelabilityTable from "./RelabilityTable";
import ApplicationTable from "./ApplicationTable";
import { useRouter } from "next/router";
import TableHeader from "./TableHeader";
import {
  businessApplicationData,
  bussinessDesc,
} from "../../dummy/officeBussiness";
import {
  ApplicationIcon,
  CompareIcon,
  CredibilityIcon,
  SecurityIcon,
} from "../../app/assets/Icons";

const ProductKeyPoints = () => {
  const [compare, setCompare] = useState(true);
  const [security, setSecurity] = useState(false);
  const [relability, setRelability] = useState(false);
  const [application, setApplication] = useState(false);
  const router = useRouter();
  const param = router.query;
  console.log(param, "params");
  return (
    <div className=" px-10">
      <TableHeader headerData={keyPoints} />
      <div className=" ml-8 flex mt-8">
        <div className=" w-1/6 ">
          <div
            onClick={() => {
              setCompare(true);
              setSecurity(false);
              setRelability(false);
              setApplication(false);
            }}
            className=" flex mt-1 items-center "
          >
            <div
              className={`flex flex-col ${
                compare && "bg-sky-500 text-white"
              } justify-center items-center h-24 w-44 border-2  border-sky-500`}
            >
              <CompareIcon
                className={`h-12 w-12 ${compare && ` fill-white`}`}
              />
              Compare Editions
            </div>
            {compare && (
              <MdArrowRight className=" text-8xl -ml-10 text-sky-500" />
            )}
          </div>
          <div
            onClick={() => {
              setCompare(false);
              setSecurity(true);
              setRelability(false);
              setApplication(false);
            }}
            className=" flex mt-1 items-center "
          >
            <div
              className={`flex ${
                security && "bg-sky-500 text-white"
              } flex-col justify-center items-center  h-24 w-44 border-2 border-sky-500`}
            >
              <SecurityIcon
                className={`h-12 w-12 ${security && ` fill-white`}`}
              />
              Security
            </div>
            {security && (
              <MdArrowRight className=" text-8xl -ml-10 text-sky-500" />
            )}
          </div>
          <div
            onClick={() => {
              setCompare(false);
              setSecurity(false);
              setRelability(true);
              setApplication(false);
            }}
            className=" flex mt-1 items-center"
          >
            <div
              className={`flex ${
                relability && "bg-sky-500 text-white"
              } flex-col justify-center items-center h-24 w-44 border-2 border-sky-500`}
            >
              <CredibilityIcon
                className={`h-12 w-12 ${relability && ` fill-white`}`}
              />
              Relability
            </div>
            {relability && (
              <MdArrowRight className=" text-8xl -ml-10 text-sky-500" />
            )}
          </div>
          <div
            onClick={() => {
              setCompare(false);
              setSecurity(false);
              setRelability(false);
              setApplication(true);
            }}
            className=" flex mt-1 items-center"
          >
            <div
              className={`flex ${
                application && `bg-sky-500 text-white`
              } flex-col justify-center items-center h-24 w-44 border-2 border-sky-500`}
            >
              <ApplicationIcon
                className={`h-12 w-12 ${application && ` fill-white`}`}
              />
              Applications
            </div>
            {application && (
              <MdArrowRight className=" text-8xl -ml-10 text-sky-500" />
            )}
          </div>
        </div>
        {compare && (
          <CompareTable
            description={param.name == "Business" ? bussinessDesc : description}
            type={param.name}
          />
        )}
        {security && <SecurityTable TableData={securityData} />}
        {relability && <RelabilityTable List={relabilityData} />}
        {application && (
          <ApplicationTable
            ApplicationList={
              param.name == "Business"
                ? businessApplicationData
                : enterpriseApplicationData
            }
            type={param.name}
          />
        )}
      </div>
    </div>
  );
};

export default ProductKeyPoints;
