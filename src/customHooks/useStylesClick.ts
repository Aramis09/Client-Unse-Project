import { useRef, useState } from "react";

interface UseStyleParams {
  styles: { readonly [key: string]: string };
  first: string;
  second: string;
}
export  const useStylesClick = ({ styles, first, second }: UseStyleParams) => {
  const firstOption = styles[first];
  const secondOption = styles[second];
  const flag = useRef(true);
  const [style, setStyle] = useState(styles[first]);
  const changeStyles = () => {
    if (flag.current) {
      setStyle(secondOption);
      flag.current = false;
      return;
    }
    setStyle(firstOption);
    flag.current = true;
    return;
  };
  return { style, setStyle, changeStyles };
};