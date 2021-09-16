import Linkedin from "components/linkedin";
import Twitter from "components/twitter";
import Facebook from "components/facebook";
import Instagram from "components/instagram";
import Github from "components/github";
import Mail from "components/mail";

export default function Social() {
  return (
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
  );
}
