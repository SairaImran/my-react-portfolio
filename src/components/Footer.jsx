function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-logo">
          My Profile<span>.</span>
        </div>

        <p>
          AI/ML • Data Science • Software Development
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Saira Batool. All rights reserved.
        </p>

        <p>
          Built with React.
        </p>
      </div>

    </footer>
  );
}

export default Footer;