import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../css/pages/feedback.css";
function FeedBackPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="feedback__container">
        <div className="feedback">
          <h1 className="feedback__title">FeedBack</h1>
          <h2 className="feedback__subtitle">
            Leave a comment below. It could be anything – appreciation,
            information, wisdom, or opinion!
          </h2>
          <div className="feedback__share-message">
            <h3 className="feedback__share-message__title">
              Share a message for a future visitor of my site
            </h3>
            <form>
              <input
                type="text"
                className="feedback__share-message__input"
                placeholder="Your message..."
              />
              <button type="submit" className="feedback__share-message__submit">
                Submit
              </button>
            </form>
            <p className="feedback__share-message__p">
              Your information is only used to display your name and reply by
              email.
            </p>
          </div>
          <div className="feedback__comments-container">
            <div className="feedback__comment">
              <p className="feedback__comment-title">Example 1</p>
              <p className="feedback__comment-subtitle">
                <i>Paras Dutt</i> /18 Nov 2022 at 1:54 PM
              </p>
            </div>
            <div className="feedback__comment">
              <p className="feedback__comment-title">Example 1</p>
              <p className="feedback__comment-subtitle">
                <i>Paras Dutt</i> /18 Nov 2022 at 1:54 PM
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default FeedBackPage;
