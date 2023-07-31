import useMakeRequest from "@/customHooks/makeRequest";
import { ResToGetSubServices } from "@/types/interfaces";
import { GetWithPage } from "@/types/requestTypes";
import styles from "./subServices.module.scss";
import SubService from "../subService/subService";

const initialHook = {
  url: "http://localhost:3001/subServices/getSubservices",
  body: null,
  querys: { page: 1, size: 6 },
};

interface P {
  pageSize: number | null;
}

export default function SubServices({ pageSize }: P) {
  if (pageSize) {
    initialHook.querys.size = pageSize;
  }
  const { data: subServiceList } = useMakeRequest<
    null,
    GetWithPage,
    ResToGetSubServices
  >(initialHook);
  return (
    <div className={styles.container}>
      {subServiceList?.data.map((subservice) => (
        <SubService key={subservice.id} subServiceProps={subservice} />
      ))}
    </div>
  );
}
