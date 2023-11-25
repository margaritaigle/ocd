import "./NavItem.css";
import { Link } from "react-router-dom";

export const NavItem = ({
  handleClick,
  title,
  route,
}: {
  handleClick: any;
  title: string;
  route?: string;
}) => {
  return (
    <li>
      {route ? (
        <Link to={route}>{title}</Link>
      ) : (
        <a onClick={(ev) => handleClick(ev, title)}>{title}</a>
      )}
    </li>
  );
};
