import { NavItem } from "../NavItem/NavItem";
import "./NavegationBar.css";

export enum NAV_CLICK_ACTIONS {
  INICIO = "Inicio",
  GALERIA = "Galería",
  MONASTERIOS = "Monasterios",
  CONTACTO = "Contacto",
}

// const floridaFacebookUrl =
// "https://www.facebook.com/Carmelitas.Descalzas.Florida.Uruguay/?locale=es_LA";
// const mvdInstagramUrl = "https://www.instagram.com/monjascarmelitas/?hl=es";

export const NavegationBar = () => {
  const navItems = [
    { title: NAV_CLICK_ACTIONS.INICIO, route: "/" },
    { title: NAV_CLICK_ACTIONS.CONTACTO, route: "galería" },
    { title: NAV_CLICK_ACTIONS.MONASTERIOS },
    { title: NAV_CLICK_ACTIONS.CONTACTO },
  ];

  function handleClick(selectedNavItem: NAV_CLICK_ACTIONS) {
    switch (selectedNavItem) {
      case NAV_CLICK_ACTIONS.INICIO:
        window.scrollTo(0, 0);
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
        {navItems.map(({ title, route }) => (
          <NavItem
            key={title}
            title={title}
            handleClick={handleClick}
            route={route}
          />
        ))}
      </ul>
    </nav>
  );
};
