import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

function Header() {
  return (
    <header className="header grid">
      <Link to={"/"} className="link-logo">
        <img
          className="logo-meli"
          src={logo}
          alt="Logo"
          width={53}
          height={26}
        />
      </Link>
      <SearchBar />
    </header>
  );
}

export default Header;
