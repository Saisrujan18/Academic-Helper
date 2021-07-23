// import r from "../";

import pdf from "../View/download.pdf";

function View()
{
    return(
        <div>
            <a href={pdf} download>download</a>
        </div>
    );
}

export default View;