import "./404.css";

function Home()
{
    const user=JSON.parse(sessionStorage.getItem("user"));
    const name="Welcome "+user.emailId+" ;)";
    return(
        <div>
            <h5 className="text-center texo">{name}</h5>
            <h5 className="text-center">Checkout Search,Upload Pages</h5>
        </div>
    );
}

export default Home;