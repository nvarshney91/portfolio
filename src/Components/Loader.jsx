import Lottie from "lottie-react";
import Loading from '../Animations/Loading.json';

export default function Loader(){
    return(
        <div className="w-1/2 mx-auto">
            <Lottie animationData={Loading} />;
        </div>
    )
}