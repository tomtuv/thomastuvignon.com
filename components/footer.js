import Container from "./container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <p>© {new Date().getFullYear()} Thomas Tuvignon</p>
      </Container>
    </footer>
  );
}
