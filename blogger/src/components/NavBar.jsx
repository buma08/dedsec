import "../css/Nav.css";
import UseQuery from "../hooks/useQuery";
import { TbMenu } from "react-icons/tb";
import {RxCross2} from 'react-icons/rx'
function NavBar() {
  const url = window.location.href;
  let page = url.slice(22);
  console.log(page);
  if (page === "") {
    page = "home";
  }
  function isActive(p) {
    if (p === page) {
      return " active";
    } else {
      return "";
    }
  }
  function ToggleMenu() {
    document.getElementById("navBar-id").classList.toggle("navBar__active");
  }
  return (

    <>
    <div className="navBar__button-open-div">
        <TbMenu onClick={ToggleMenu} id=' navbar__button-open'></TbMenu>
    </div>
    
      <nav className="navBar" id="navBar-id">
        <RxCross2 className="navBar_button" onClick={ToggleMenu}></RxCross2>
        <li className="navBar__li">
          <p className={"navBar__item" + isActive("home")}>Home</p>
        </li>
       
        <li className="navBar__li">
          <p className={"navBar__item" + isActive("notes")}>Notes</p>
        </li>
        
        <li className="navBar__li">
          <p className={"navBar__item" + isActive("writeup")}>Write-up</p>
        </li>
        
        <li className="navBar__li">
          <p className={"navBar__item" + isActive("feedback")}>FeedBack</p>
        </li>
        
        <li className="navBar__li">
          <p className={"navBar__item" + isActive("admin")}>Admin</p>
        </li>
        
      </nav>
    </>
  );
}
export default NavBar;
