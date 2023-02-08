import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import '../css/pages/admin.css'
import { useState } from "react"
import AdminPanel from "../components/adminPanel"

function AdminPage(){




    const [mode, setMode] = useState(false)

    function HandleSubmit(){
        //   Aqui hay que hacer llamada a la api, validacion, etc...
        // ...

        setMode(true)
    }

    function ReturnMode(){
        if(mode === false){
            return(
            <>
                    <>
        <form className='login-form' onSubmit={HandleSubmit}>
            
            
            <input type="text" className="lf-input" placeholder="User" name="user"/>
            
            <input placeholder='Password'type="password" className="lf-input" name="password"/>

            <button type="submit" className="lf-button">Log-in</button>
        </form>
        </>
            </>)
        }
        else{
            return(<AdminPanel></AdminPanel>)
        }
    }
    return(
        <>
                <NavBar></NavBar>

                <div className="admin__container">
                    <div className="admin">
                        <h1 className="admin__title">Admin</h1>
                        <div className="mode">

                            {<ReturnMode></ReturnMode>}      
                        </div>
                    </div>
                </div>
                <Footer></Footer>
        </>
    )
}
export default AdminPage