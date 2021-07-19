import {Redirect, Route} from 'react-router-dom';

function PrivateRoute({children, ...rest})
{
    // console.log(children,...rest);
    return(
        <Route {...rest} render={() =>{
            return sessionStorage.getItem("user")==null? <Redirect to="/login"/>:children
        }}/>
    )
}

export default PrivateRoute;