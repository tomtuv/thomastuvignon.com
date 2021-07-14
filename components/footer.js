import Social from "./social";
import Languages from "./languages";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Social />
        <Languages />
        <p>© {new Date().getFullYear()} Thomas Tuvignon</p>
      </div>
    </footer>
  );
}
