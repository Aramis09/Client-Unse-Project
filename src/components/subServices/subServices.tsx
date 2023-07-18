import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetSubServices } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import styles from "./advsubServiceertisings.module.scss";
import SubService from "../subService/subService";
import { subscribe } from "diagnostics_channel";

const initialHook = {
  url: "http://localhost:3001/subServices/getSubservices",
  body: null,
  querys: { page: 1 },
};

export default function subServices() {
  const { data: subServiceList} = useMakeRequest<
    null,
    GetWithPage,
    ResToGetSubServices
  >(initialHook);
  return (
    <div className={styles.container}>
      {subServiceList?.data.map((subservice) => (
        <SubService key={subservice.id} subServiceProps={subservice}/>
      ))}
    </div>
  );
}
