import React, { useEffect } from "react";
import AOS from "aos";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {children}

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
              <a
                href="https://twitter.com/tomtuv"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://github.com/tomtuv"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@thomastuvignon.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <span>E-mail</span>
              </a>
            </li>
          </ul>

          <p>© 2021 Thomas Tuvignon</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
