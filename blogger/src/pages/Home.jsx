import NavBar from "../components/NavBar"
import '../css/home.css'
function HomePage(){
    return(
        <>
   
        <NavBar></NavBar>
        <div className="information__div">
            <div className="information__title">
                <h1>Hackthebox Forge Writeup</h1>
            </div>
            <div className="information__subtitle-div">
                <p className="information__subtitle-date">Dedsec / September 12, 2021</p> <p className="information__subtitle-views">6 min read • 40 views</p>
            </div>
        </div>
        
        </>
    )
}
export default HomePage