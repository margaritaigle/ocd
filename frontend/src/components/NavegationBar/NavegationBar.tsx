import { NavItem } from "../NavItem/NavItem";
import "./NavegationBar.css";

enum NAV_CLICK_ACTIONS {
  INICIO = "Inicio",
  GALERIA = "Galería",
  MONASTERIOS = "Monasterios",
  CONTACTO = "Contacto",
}

export const NavegationBar = () => {
  const navItems = [
    { title: "Inicio", route: "/" },
    { title: "Galería", route: "galería" },
    { title: "Monasterios" },
    { title: "Contacto" },
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
