
import tripbutton1 from "./tripbutton1.png"
import './App.css'


export default function UserPage() {

    return(
        <>
        <h1>My Trips</h1>

        <button><img  id='tripbutton1' src={tripbutton1} alt="my image" onClick={myfunction}></img></button>

        </>
    )

}

function myfunction() {
    console.log("CLICKED");
}