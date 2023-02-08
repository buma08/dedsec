import '../css/components/footer.css'
function Footer(){
    return(
        <>
        <hr className='footer__line'/>
        <div className="footer">
        
        <a href="/" className="footer__link">Home</a>
        <a href="/writeup" className="footer__link">Blog</a>
        <a href="/feedback" className="footer__link">Feedback</a>
        <a href="" className="footer__link">Github</a>
        <a href="" className="footer__link">Twitter</a>
        <a href="" className="footer__link">Telegram</a>
        </div>
        </>
    )
}
export default Footer