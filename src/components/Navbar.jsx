import {
  Navigation,
  ImageContainer,
  List,
  ListElement,
  MobileMenu,
  DropdownMenu,
  DropdownButton,
} from "./ComponentsStyle";
import logo from "../assets/surhome.svg";
import mobileMenu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <Navigation>
      <ImageContainer>
        <img src={logo} className="logo" />
      </ImageContainer>
      <DropdownButton>
        <img className="mobile-menu-button" src={mobileMenu} />
      </DropdownButton>
      <MobileMenu>
        <DropdownMenu>
          <li>
            <a href="/">Dropdown 1 </a>
          </li>
          <li>
            <a href="/">Dropdown 2</a>
          </li>
          <li>
            <a href="/">Dropdown 2</a>
          </li>
          <li>
            <a href="/">Dropdown 3</a>
          </li>
          <li>
            <a href="/">Dropdown 4</a>
          </li>
        </DropdownMenu>
      </MobileMenu>
      <List>
        <ListElement>Inicio</ListElement>
        <ListElement>Productos</ListElement>
        <ListElement>Preguntas Frecuentes</ListElement>
        <ListElement>Login</ListElement>
        <ListElement>Register</ListElement>
      </List>
    </Navigation>
  );
};

export default Navbar;
