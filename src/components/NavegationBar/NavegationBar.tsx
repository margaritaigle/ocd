import { NavItem } from "../NavItem/NavItem";
import "./NavegationBar.css";

enum NAV_CLICK_ACTIONS {
  INICIO = "Inicio",
  GALERIA = "Galería",
  MONASTERIOS = "Monasterios",
  CONTACTO = "Contacto",
}

const floridaFacebookUrl =
  "https://www.facebook.com/Carmelitas.Descalzas.Florida.Uruguay/?locale=es_LA";
const mvdInstagramUrl = "https://www.instagram.com/monjascarmelitas/?hl=es";

export const NavegationBar = () => {
  const navItems = ["Inicio", "Galería", "Monasterios", "Contacto"];

  function handleClick(ev: any, selectedNavItem: NAV_CLICK_ACTIONS) {
    switch (selectedNavItem) {
      case NAV_CLICK_ACTIONS.INICIO:
        window.scrollTo(0, 0);
        break;
      case NAV_CLICK_ACTIONS.GALERIA:
        ev.preventDefault();
        window.open(floridaFacebookUrl);
        break;
      case NAV_CLICK_ACTIONS.MONASTERIOS:
        break;
      case NAV_CLICK_ACTIONS.CONTACTO:
        break;
      default:
        break;
    }
  }
  return (
    <nav className="nav-bar">
      <ul>
        {navItems.map((navItem) => (
          <NavItem key={navItem} title={navItem} handleClick={handleClick} />
        ))}
      </ul>
    </nav>
  );
};
