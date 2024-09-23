import { useState } from "react"

export const Calculator = () => {
    const [val , setval] = useState("")
    const Remove = ()=>{
        try{
            setval("")
        }
        catch(error){
            console.log(val)
        }
    }
    const BackSpace = ()=>{
        try{
            setval(val.slice(0,-1))
        }
        catch(error){
            console.log(val)
        }
    }
    const Calculate=()=>{
        try{
            setval(String(eval(val)));        
        }
        catch(error){
            setval(Error)        }
    }
return (
<div className="flex justify-center mt-44">
    <div className="h-[470px] w-80 bg-slate-300 rounded-3xl flex flex-col justify-end">
    <div className="p-2">
        <input type="text" className="text-center w-full h-32 text-4xl rounded-t-3xl" value={val} onChange={(e)=>setval(e.target.value)}>
        </input>
    </div>
    <div className="grid grid-cols-4 p-5 gap-3">
    <button className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center" value="C" onClick={()=>Remove()} >AC</button>
    <button className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center" value="%" onClick={(e)=>setval(val+ e.target.value)}>%</button>
    <button className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center" value="Back" onClick={()=>BackSpace()}>Back</button>
    <button className="bg-slate-500 w-12 h-12 rounded-full text-white flex justify-center items-center" value="/" onClick={(e)=>setval(val+ e.target.value)}>/</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="7" onClick={(e)=>setval(val+ e.target.value)}>7</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="8" onClick={(e)=>setval(val+ e.target.value)}>8</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="9" onClick={(e)=>setval(val+ e.target.value)}>9</button>
    <button className="bg-slate-500 w-12 h-12   rounded-full text-white flex justify-center items-center" value="*" onClick={(e)=>setval(val+ e.target.value)}>*</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="4" onClick={(e)=>setval(val+ e.target.value)}>4</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="5" onClick={(e)=>setval(val+ e.target.value)}>5</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="6" onClick={(e)=>setval(val+ e.target.value)}>6</button>
    <button className="bg-slate-500 w-12 h-12   rounded-full text-white flex justify-center items-center" value="-" onClick={(e)=>setval(val+ e.target.value)}>-</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="1" onClick={(e)=>setval(val+ e.target.value)}>1</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="2" onClick={(e)=>setval(val+ e.target.value)}>2</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="3" onClick={(e)=>setval(val+ e.target.value)}>3</button>
    <button className="bg-slate-500 w-12 h-12   rounded-full text-white flex justify-center items-center" value="+" onClick={(e)=>setval(val+ e.target.value)}>+</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="00" onClick={(e)=>setval(val+ e.target.value)}>00</button>
    <button className="bg-white w-12 h-12   rounded-full flex justify-center items-center" value="0" onClick={(e)=>setval(val+ e.target.value)}>0</button>
    <button className="bg-white w-12 h-12  rounded-full flex justify-center items-center" value="." onClick={(e)=>setval(val+ e.target.value)}>.</button>
    <button className="bg-orange-500 w-12 h-12   rounded-full flex justify-center items-center" value="=" onClick={()=>Calculate()}>=</button>
</div>

</div>
</div>
  )
}
