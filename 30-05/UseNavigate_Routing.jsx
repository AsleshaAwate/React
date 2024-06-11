import { useNavigate } from "react-router-dom";

function UseNavigate_Routing(){
    const router = useNavigate();

    return(
        <div>
            <h1>Testing UseNavigate</h1>
            <button onClick={()=>router("/")}>Go to Homapage.</button>
        </div>
    );
}

export default UseNavigate_Routing;