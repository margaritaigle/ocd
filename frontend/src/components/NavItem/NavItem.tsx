import "./NavItem.css";

export const NavItem = ({ handleClick, title, href }: { handleClick: any, title: string, href?: string }) => {
  return (
    <li>
      <a href={href} onClick={(ev) => handleClick(ev, title)}>
        {title}
      </a>
    </li>
  );
};