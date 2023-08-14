import { createArrayPagination } from "@/helpers/paginate";
import styles from "./paginate.module.scss";
import ShowImage from "../showImage/showImage";
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
        src="https://res.cloudinary.com/dynnwv7md/image/upload/v1691869581/icons8-back-to-96_gxejsr.png"
        alt="arrowL"
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
        src="https://res.cloudinary.com/dynnwv7md/image/upload/v1691869581/icons8-next-page-96_vsud1m.png"
        alt="arrowR"
        onClick={() => {
          setPageNumber(currentPage + 1);
        }}
      />
    </div>
  );
}
