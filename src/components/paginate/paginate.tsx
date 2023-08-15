import { createArrayPagination } from "@/helpers/paginate";
import styles from "./paginate.module.scss";
import { ARROW_PAGINATE_L, ARROW_PAGINATE_R } from "@/utils/consts";

export default function Pagination({
  currentPage,
  setPageNumber,
}: {
  currentPage: number;
  setPageNumber: any;
}) {
  //!Falta extraer logica del componente y solucionar problema de cuando es mayor a 10
  let arrayOfPages = createArrayPagination(currentPage);
  return (
    <div className={styles.container}>
      <img
        src={ARROW_PAGINATE_L}
        alt="ICON_ARROW_LEFT"
        onClick={() => setPageNumber(currentPage - 1 || 1)}
      />
      {arrayOfPages.map((page) => (
        <>
          {page === Number(currentPage) ? (
            <button
              onClick={() => setPageNumber(page)}
              className={styles.buttonCurrentPage}
            >
              {page}
            </button>
          ) : (
            <button
              onClick={() => setPageNumber(page)}
              className={styles.button}
            >
              {page}
            </button>
          )}
        </>
      ))}
      <img
        src={ARROW_PAGINATE_R}
        alt="ICON_ARROW_RIGHT"
        onClick={() => {
          setPageNumber(currentPage + 1);
        }}
      />
    </div>
  );
}
