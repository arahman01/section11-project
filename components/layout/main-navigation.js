import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeIsMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className={classes.header}>
      {/* when content inside a link is not text rather is for example a component, we need to manually add an anchor tag to tell next that this should be clickable. no need to add a href to anchor tag */}
      <a onClick={handleLogoClick}>
        <Logo />
      </a>
      <nav>
        <ul className={isMenuOpen ? classes.show : ""}>
          <li onClick={closeIsMenu}>
            <Link to="aboutMe" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li onClick={closeIsMenu}>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li onClick={closeIsMenu}>
            {/*Next Link: <Link href="/posts">Posts</Link> */}
            <Link to="posts" smooth={true} duration={500}>
              Posts
            </Link>
          </li>
          <li onClick={closeIsMenu}>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={classes.burgerMenu}
          onClick={toggleMenu}
          id="burger-menu"
        >
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}

export default MainNavigation;
