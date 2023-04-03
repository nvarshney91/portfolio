
import Lottie from "lottie-react";
import Signal from '../Animations/Signal.json';
import { useState } from "react";
function Contact(){
    const [name,setName]=useState("");
    const [desc,setDesc]=useState("");
    const [err,setErr]=useState([]);
    const[submit,setSubmit]=useState(false);
    function submitHandler(e){
        e.preventDefault();
        setErr([]);
        console.log(err);
        if(!name){
            setErr(["!!NO name not found!!"])
            return;
        }
        if(!desc){
            setErr(["!!NO description found!!"]);
            return;
        }
        if(err.length ===0){
            console.log([
                    name,
                    desc
            ])
        } 
    }
    return(
        <div className="grid mt-5 grid-cols-2 gap-8">
        <div>
            <Lottie animationData={Signal} />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bolder">Summon BATMAN</h1>
        {
            submit===false ? 
            <form onSubmit={submitHandler} className="flex flex-col w-full">
            <div className="w-full flex flex-col">
                <label>Enter Name of victim</label>
                <input onChange={function(e){
                    setName(e.target.value)
                }} value={name} type="text" className="rounded-xl p-3 text-zinc-900"/>
            </div>
            <div className="w-full flex flex-col ">
                <label>Problems faced</label>
                <textarea onChange={function(e){
                    setDesc(e.target.value)
                }} value={desc} cols="30" rows="10" className="rounded-xl p-3 text-zinc-900"></textarea>
            </div>
           <button className="text-2xl font-bolder bg-rose-600 mt-4 rounded-xl p-4">Call Batman</button>
            {
                err.length>0 && <h1 className="text-rose-600">{err[0]}</h1>
            }
        </form> :
        <h1 className="text-rose-200">Batmobile incoming</h1>
        }
        
        </div>
      </div>
    )
}
export default Contact;