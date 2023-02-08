import NavBar from "../components/NavBar";
import { RiExternalLinkFill } from "react-icons/ri";
import {AiFillEye} from 'react-icons/ai'

import "../css/pages/home.css";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="home__container">
        <div className="home">
          <h1 className="title">Dedsec</h1>
          <h2 className="subtitle">
            Passionate About new Technologies and techniques
          </h2>
          <p className="subparagraph">
            Helping hackers to solve machines faster. Writing blogs on the
            0xdedinfosec platform.
          </p>
          <h3 className="follow-me">Follow me</h3>
          <div className="follow-div">
            <div className="social-media">
              <img
                className="logo"
                src="https://download.logo.wine/logo/Telegram_(software)/Telegram_(software)-Logo.wine.png"
              ></img>
              <div className="social-media__title-div">
                <h3 className="social-media__title">Telegram</h3>
                <p className="social-media__subtitle">Telegram channel</p>
              </div>
            </div>

            <div className="social-media">
              <img
                src="https://0xdedinfosec.vercel.app/static/logo/github_logo.svg"
                alt=""
                className="logo"
              />
              <div className="social-media__title-div">
                <h3 className="social-media__title">Github</h3>
                <p className="social-media__subtitle">Follow me on github</p>
              </div>
            </div>
            <div className="social-media">
              <img
                src="https://0xdedinfosec.vercel.app/static/logo/twitter_logo.svg"
                alt=""
                className="logo"
              />
              <div className="social-media__title-div">
                <h3 className="social-media__title">Twitter</h3>
                <p className="social-media__subtitle">Follow me on twitter</p>
              </div>
            </div>
            <div className="social-media">
              <h3 className="social-media__title all-time-views__title">
                <a href="/" target="_blank">
                  {" "}
                  All-Time Views{" "}
                  <div className="external-link__div">
                    <RiExternalLinkFill></RiExternalLinkFill>
                  </div>
                </a>{" "}
              </h3>
              <p className="social-media__subtitle all-time-views__subtitle">
                <b>0</b>
              </p>
            </div>
          </div>
          <h3 className="title">Featured Posts</h3>
          <div className="featured-posts">
            <div className="featured-post border-1">
            <p className="featured-post__title">Ejemplo1</p>
              <div className="featured-posts__views-div">
              <div className="featured-post__views-icon">
                  <AiFillEye></AiFillEye>
                </div>
                <p className="featured-post__views-p">
                  123
                </p>
              </div>
            </div>
            <div className="featured-post border-2">
              <p className="featured-post__title">Ejemplo2</p>
              <div className="featured-posts__views-div">
              <div className="featured-post__views-icon">
                  <AiFillEye></AiFillEye>
                </div>
                <p className="featured-post__views-p">
                  123
                </p>
              </div>
            </div>
            <div className="featured-post border-3">
              <p className="featured-post__title">Ejemplo3</p>
              <div className="featured-posts__views-div">
              <div className="featured-post__views-icon">
                  <AiFillEye></AiFillEye>
                </div>
                <p className="featured-post__views-p">
                  123
                </p>
              </div>
            </div>
          </div>
          <a href="/writeup" className="read-all-posts">Read all posts ➜</a>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default HomePage;
