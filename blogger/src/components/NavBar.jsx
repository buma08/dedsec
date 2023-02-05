import '../css/Nav.css'
import UseQuery from '../hooks/useQuery'
import {TbMenu} from 'react-icons/tb'
function NavBar(){

    const url = window.location.href
    let page = url.slice(22)
    console.log(page)
    if(page === ''){
        page = 'home'
    }
    function isActive(p){

        if(p === page){
            return ' active'
        }
        else{
            return ''
        }
    }
    function ToggleMenu(){
        document.getElementById('navBar-id').classList.toggle('navBar__active')
    }
    return(
        <>
        <nav className='navBar__active' id='navBar-id'>
            <p className={"navBar__item" + isActive('home')}>Home</p>
            <p className={"navBar__item" + isActive('notes')}>Notes</p>
            <p className={"navBar__item" + isActive('writeup')}>Write-up</p>
            <p className={"navBar__item" + isActive('feedback')}>FeedBack</p>
            <p className={"navBar__item" + isActive('admin')}>Admin</p>
        </nav>
        <TbMenu className='navBar_button' onClick={ToggleMenu}></TbMenu>
        </>
    
        
    )
}
export default NavBar