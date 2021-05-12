import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-menu">
          <p>About</p>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
          <p>Feedback</p>
        </div>
        <p style={{fontSize: '14px', color:'var(--TEXT-1)'}}>&copy; 2021 FinProH8. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
