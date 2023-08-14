import { Fragment } from "react";

const SwitchComponent = (
  condition: boolean,
  opt1: JSX.Element,
  opt2: JSX.Element
) => {
  return condition ? <Fragment>{opt1}</Fragment> : <Fragment>{opt2}</Fragment>;
};

export default SwitchComponent;
