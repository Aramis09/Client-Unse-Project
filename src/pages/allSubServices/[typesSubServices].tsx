import Pagination from "@/components/paginate/paginate";
import SubServices from "@/components/subServices/subServices";
import styles from "./allSbuService.module.scss";
import { useState, Fragment } from "react";

export default function allSubservices() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <section className={styles.container}>
      <SubServices pageSize={9} pageNumber={pageNumber} />
      <Pagination currentPage={pageNumber} setPageNumber={setPageNumber} />
    </section>
  );
}
