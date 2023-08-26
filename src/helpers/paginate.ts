export const createArrayPagination = (currentPage: number) => {
  //!Esto lo que hace es mostrar la paginacion, siempre muestra 10 numeros y la posicion actual
  let arrayOfPages: number[] = [];
  if (currentPage) {
    arrayOfPages = Array.from(
      { length: 3 },
      (_, current) =>
        current +
        (Math.floor(currentPage / 3) * 3
          ? Math.floor(currentPage / 3 ) * 3
          : 1)
    );
  }

  //!((Math.floor(currentPage/10))*10 ?(Math.floor(currentPage/10))*10:1) esto indica de donde empieza el array y siempre calcula el principio de cada multiplio de 10
  //todo el condicional es para que no muestre el cero, ya que este no pertenece a un numero valido de la paginacion
  return arrayOfPages;
};



// export const createArrayPagination = (currentPage: number) => {
//   //!Esto lo que hace es mostrar la paginacion, siempre muestra 10 numeros y la posicion actual
//   let arrayOfPages: number[] = [];
//   if (currentPage) {
//     arrayOfPages = Array.from(
//       { length: 10 },
//       (_, current) =>
//         current +
//         (Math.floor(currentPage / 10) * 10
//           ? Math.floor(currentPage / 10) * 10
//           : 1)
//     );
//   }

//   //!((Math.floor(currentPage/10))*10 ?(Math.floor(currentPage/10))*10:1) esto indica de donde empieza el array y siempre calcula el principio de cada multiplio de 10
//   //todo el condicional es para que no muestre el cero, ya que este no pertenece a un numero valido de la paginacion
//   return arrayOfPages;
// };