// import r from "../";

import pdf from "../Search/download.pdf";
import axios from "axios";


function View()
{

    function Change(event)
    {
        event.preventDefault();
        const file="no";
        axios.post("http://localhost:3001/search",{file})
            .then(res=>{console.log(res);})
            .catch(err=>console.log(err))
    }
    return(
        <div>
            <a href={pdf} download onClick={Change}>download</a>
            <button onClick={Change}>Fetch</button>
        </div>
    );
}

export default View;
