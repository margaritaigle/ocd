import { NAV_CLICK_ACTIONS } from "../NavegationBar/NavegationBar";
import "./NavItem.css";
import { Link } from "react-router-dom";

export const NavItem = ({
  handleClick,
  title,
  route,
}: {
  handleClick: (title: NAV_CLICK_ACTIONS) => void;
  title: NAV_CLICK_ACTIONS;
  route?: string;
}) => {
  return (
    <li>
      {route ? (
        <Link onClick={() => handleClick(title)} to={route}>
          {title}
        </Link>
      ) : (
        <a onClick={() => handleClick(title)}>{title}</a>
      )}
    </li>
  );
};
