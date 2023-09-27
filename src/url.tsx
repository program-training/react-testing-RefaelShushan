import { useState, useRef } from "react";
import './url.css';
import  {InfoInterface}  from "./info";

let clickTime:string ="";

export function Url() {
  const [state, setState] = useState(``);
  const [info,setInfo]= useState<InfoInterface>({
    qr:'',
    size:'',
    date:'',
  })
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="url">
        <h1>create QR</h1>
      <h2><img src={state} alt="" /></h2>
      <input placeholder="enter url" ref={inputRef} role="dialog"/>
      <button
        onClick={() =>{
            clickTime = new Date().toLocaleString()
           const inputRefValue = inputRef.current?.value  
          setState(
            `//api.qrserver.com/v1/create-qr-code/?data=${inputRefValue} &size=150x150`
          )
        }}
      >
        Click me
      </button>
      <button
        onClick={() =>{  
          setInfo({
            qr:`${state}`,
            size:'',
            date:`${clickTime}`}
            )
        }}
      >
        info
      </button>
      <p>`{info.qr} {info.size} {info.date}`</p>
    </div>
  );
}

