import "./Footer.css";

function Footer() {
  return (
    <>
      
        <footer >
          <section>
            <p className="footer-section-header">Contact</p>
            <a href="https://github.com/Evecandy" target="_blank">Eve Candy - GitHub </a>
          </section>
          <section className="help">
            <p className="footer-section-header">Help and information</p>
            <p>Help</p>
            <p>Track your order</p>
          </section>

          <section className="about">
            <p className="footer-section-header">About Shoppa</p>
            <p>About us</p>
          </section>
          <section className="more">
            <p className="footer-section-header">More from Shoppa</p>
            <p>Mobile and Shoppa apps</p>
          </section>

        </footer>
       
     
    </>
  );
}

export default Footer;
