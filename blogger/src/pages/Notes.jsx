import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import img1 from '../assets/windows.png' 
import img2 from '../assets/linux.png'
import img3 from '../assets/kali.png'
import "../css/pages/notes.css";
function NotesPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="notes__container">
        <div className="notes">
          <h1 className="notes__title">Notes</h1>
        <div className="notes-div">
        <div className="social-media">
          <img
            className="note-logo"
            src={img1}
          ></img>
          <div className="social-media__title-div">
            <h3 className="social-media__title">Windows</h3>
            <p className="social-media__subtitle">Telegram channel</p>
          </div>
        </div>

        <div className="social-media">
          <img
            src={img2}
            alt=""
            className="note-logo"
          />
          <div className="social-media__title-div">
            <h3 className="social-media__title">Linux</h3>
            <p className="social-media__subtitle">Follow me on github</p>
          </div>
        </div>
        <div className="social-media">
          <img
            src={img3}
            alt=""
            className="note-logo"
          />
          <div className="social-media__title-div">
            <h3 className="social-media__title">Pentesting</h3>
            <p className="social-media__subtitle">Follow me on twitter</p>
          </div>
        </div>
      </div>
      

        </div>
      </div>
      

      <Footer></Footer>
    </>
  );
}
export default NotesPage;
