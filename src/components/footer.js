import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/thomastuvignon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/tomtuv" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/tomtuv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/tomtuv" target="_blank" rel="noreferrer">
            <i className="fa fa-github" aria-hidden="true"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="mailto:thomas.tuvignon@icloud.com">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>E-mail</span>
          </a>
        </li>
      </ul>

      <p>© {new Date().getFullYear()} Thomas Tuvignon</p>
    </div>
  </footer>
);

export default Footer;
