import logo from "./logo";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo.src} alt="header logo" />
    </div>
  );
}

export default Header;
