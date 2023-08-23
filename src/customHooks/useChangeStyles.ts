import { useEffect, useState } from "react"

interface P {
  depedence?:any
  falseStyle:{ readonly [key: string]: string }
  trueStyle:{ readonly [key: string]: string }
  condition:string | number | boolean
}
const useChangeStyles = ({depedence,condition,falseStyle,trueStyle}:P) => {
  const [stylesChosen, setStylesChosen] = useState(falseStyle)
  useEffect(()=>{
    if(condition) setStylesChosen(trueStyle)
    else setStylesChosen(falseStyle)
  },[depedence])
return {stylesChosen}
}

export default useChangeStyles