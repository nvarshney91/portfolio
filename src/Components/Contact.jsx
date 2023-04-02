
import Lottie from "lottie-react";
import Signal from '../Animations/Signal.json';
function Contact(){
    return(
      <div className="grid mt-5 grid-cols-2 gap-8">
        <div>
            <Lottie animationData={Signal} />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bolder">Summon BATMAN</h1>
        <form className="flex flex-col w-full">
            <div className="w-full flex flex-col">
                <label>Enter Name of victim</label>
                <input type="text" className="rounded-xl p-3 text-zinc-900"/>
            </div>
            <div className="w-full flex flex-col ">
                <label>Problems faced</label>
                <textarea cols="30" rows="10" className="rounded-xl p-3 text-zinc-900"></textarea>
            </div>
            <button className="text-2xl font-bolder bg-rose-600 mt-4 rounded-xl p-4">Call Batman</button>
        </form>
        </div>
      </div>
    )
}
export default Contact;