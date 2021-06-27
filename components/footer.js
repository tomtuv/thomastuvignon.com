import Linkedin from "./linkedin";
import Twitter from "./twitter";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Github from "./github";
import Mail from "./mail";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-social">
          <li>
            <Linkedin />
          </li>
          <li>
            <Twitter />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
          <li>
            <Github />
          </li>
          <li>
            <Mail />
          </li>
        </ul>
        <p>© {new Date().getFullYear()} Thomas Tuvignon</p>
      </div>
    </footer>
  );
}
