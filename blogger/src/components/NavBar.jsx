import "../css/Nav.css";
import UseQuery from "../hooks/useQuery";
import { TbMenu } from "react-icons/tb";
import {RxCross2} from 'react-icons/rx'
import {TfiSearch} from 'react-icons/tfi'

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
        <div className="navBar__button-close-div">
          <RxCross2 className="navBar_button" onClick={ToggleMenu}></RxCross2>
        </div>
        
          <li className="navBar__li navBar__li-first">
          <a className={"navBar__item" + isActive("home")}>Home</a>
        </li>
       
        <li className="navBar__li">
          <a className={"navBar__item" + isActive("notes")}>Notes</a>
        </li>
        
        <li className="navBar__li">
          <a className={"navBar__item" + isActive("writeua")}>Write-up</a>
        </li>
        
        <li className="navBar__li">
          <a className={"navBar__item" + isActive("feedback")}>FeedBack</a>
        </li>
        
        <li className="navBar__li">
          <a className={"navBar__item" + isActive("admin")}>Admin</a>
        </li>
        <div className="navBar__search-div">
          <TfiSearch></TfiSearch>
        </div>
        <li className="navBar__li navBar__li-search">
          <input type="text" className="navBar__search" />
        </li>
        
        
      </nav>
    </>
  );
}
export default NavBar;
