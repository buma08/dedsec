import "../css/components/Nav.css";
import UseQuery from "../hooks/useQuery";
import { TbMenu } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";

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
  console.log(page)
  function SearchFunc() {
    if (page == "writeup") {
      return (
        <>
          <li className="navBar__li-search">
          <div className="navBar__search-div">
            <div className="navBar__search-icon-div">
              <TfiSearch></TfiSearch>
            </div>
            
        <input type="text" className="navBar__search" />  
          </div>
          
          </li>
        </>
      );
    } else return;
  }
  return (
    <>
      <div className="navBar__button-open-div">
        <TbMenu onClick={ToggleMenu} id=" navbar__button-open"></TbMenu>
      </div>

      <nav className="navBar" id="navBar-id">
        <div className="navBar__button-close-div">
          <RxCross2 className="navBar_button" onClick={ToggleMenu}></RxCross2>
        </div>

        <li className="navBar__li navBar__li-first">
          <a href='/' className={"navBar__item" + isActive("home")}>Home</a>
        </li>

        <li className="navBar__li">
          <a href='/notes' className={"navBar__item" + isActive("notes")}>Notes</a>
        </li>

        <li className="navBar__li">
          <a href='/writeup' className={"navBar__item" + isActive("writeup")}>WriteUp</a>
        </li>

        <li className="navBar__li">
          <a href='/feedback' className={"navBar__item" + isActive("feedback")}>FeedBack</a>
        </li>

        <li className="navBar__li">
          <a href='/admin' className={"navBar__item" + isActive("admin")}>Admin</a>
        </li>

        {<SearchFunc></SearchFunc>}
      </nav>
    </>
  );
}
export default NavBar;
