import Cookies from "universal-cookie";

interface P {
  nameCookie: string;
}
export const getCookie = ({ nameCookie }: P) => {
  const cookies = new Cookies();
  const cookiesFound: string | undefined = cookies.get(nameCookie);
  return {
    foundCookie: !!cookiesFound,
    cookiesFound: cookiesFound || "",
  };
};

export const deleteCookie = ({ nameCookie }: P) => {
  const cookies = new Cookies();
  cookies.remove(nameCookie);
};
