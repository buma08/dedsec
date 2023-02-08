import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import '../css/pages/writeups.css'
function WriteUpPage(){
    return(
        <>
                <NavBar></NavBar>

                <div className="notes__container">
        <div className="notes">
          <h1 className="notes__title">Write Ups</h1>
          <div className="notes__div">
            <div className="note">
              <div className="note-card">
                <div className="note__img-div">
                                  <img
                  className="note__img"
                  src="https://picsum.photos/200/320"
                  alt=""
                />
                <img src='https://picsum.photos/200/320' className="note__img-circle"></img>
                </div>

                <div className="note__level-div">
                  <h3 className="note__level">Example</h3>
                </div>
                
              </div>
            <div className="note__title-div">
                  <h4 className="note__title">Example</h4>
                  <p className="note__subtitle">Example</p>
                  <p className="note__likes">0 LIKES</p>
                </div>
                
        </div>
        <div className="note">
              <div className="note-card">
                <div className="note__img-div">
                                  <img
                  className="note__img"
                  src="https://picsum.photos/200/320"
                  alt=""
                />
                <img src='https://picsum.photos/200/320' className="note__img-circle"></img>
                </div>

                <div className="note__level-div">
                  <h3 className="note__level">Example</h3>
                </div>
                
              </div>
            <div className="note__title-div">
                  <h4 className="note__title">Example</h4>
                  <p className="note__subtitle">Example</p>
                  <p className="note__likes">0 LIKES</p>
                </div>
                
        </div>
        <div className="note">
              <div className="note-card">
                <div className="note__img-div">
                                  <img
                  className="note__img"
                  src="https://picsum.photos/200/321"
                  alt=""
                />
                <img src='https://picsum.photos/200/321' className="note__img-circle"></img>
                </div>

                <div className="note__level-div">
                  <h3 className="note__level">Example</h3>
                </div>
                
              </div>
            <div className="note__title-div">
                  <h4 className="note__title">Example</h4>
                  <p className="note__subtitle">Example</p>
                  <p className="note__likes">0 LIKES</p>
                </div>
                
        </div>
        </div>
        </div>
      </div>
                <Footer></Footer>
        </>
    )
}
export default WriteUpPage 