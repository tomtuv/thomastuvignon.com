import React from "react";

import Linkedin from "./linkedin";
import Twitter from "./twitter";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Github from "./github";
import Mail from "./mail";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul>
        <li>
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/thomastuvignon"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            className="icon icon-twitter"
            href="https://twitter.com/tomtuv"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            className="icon icon-facebook"
            href="https://www.facebook.com/thomas.tuvignon"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/tomtuv"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            className="icon icon-github"
            href="https://github.com/tomtuv"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            className="icon icon-mail"
            href="mailto:contact@thomastuvignon.com"
          >
            <Mail />
          </a>
        </li>
      </ul>

      <p>© {new Date().getFullYear()} Thomas Tuvignon</p>
    </div>
  </footer>
);

export default Footer;
