export interface StatusSend {
  display: string;
  color: string;
  messaje: string;
  fontSize: string;
  fontWeight: string;
  marginBottom: string;
}

export let messajes = {
  noSend: {
    display: "none",
    color: "",
    messaje: "",
    fontSize: "2ch",
    fontWeight: "700",
    marginBottom: "20px",
  },
  SendFail: {
    display: "block",
    color: "red",
    messaje:
      "Ocurrio un error, por favor asegurese de mandar por lo menos una imagen",
    fontSize: "2ch",
    fontWeight: "700",
    marginBottom: "20px",
  },
  SendSuccessful: {
    display: "block",
    color: "green",
    messaje: "Carrousel cambiado correctamente",
    fontSize: "2ch",
    fontWeight: "700",
    marginBottom: "20px",
  },
};