import { useState } from "react";
import { Link } from "react-scroll";
import "./nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="Nav">
      <a className="logo" href="">
        CHROMA BG
      </a>
      <nav>
        <li class="hov" onClick={handleClick}>
          MENU
          <ul className={`list-items ${isOpen ? "open" : ""} main`}>
            <li>
              {" "}
              <Link
                className="nav__link"
                to="saturn"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                saturn
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="nav__link"
                to="gradient"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                gradient
              </Link>
            </li>
            <li>
              <Link
                className="nav__link"
                to="solid"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                solid
              </Link>
            </li>
          </ul>
        </li>
      </nav>
    </nav>
  );
}

export default Nav;
