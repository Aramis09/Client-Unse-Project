const SwitchComponent = (
  condition: boolean,
  opt1: JSX.Element,
  opt2: JSX.Element
) => {
  return condition ? <>{opt1}</> : <>{opt2}</>;
};

export default SwitchComponent;
