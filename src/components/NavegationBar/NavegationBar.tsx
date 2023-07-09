import "./NavegationBar.css";

const floridaFacebookUrl =
  "https://www.facebook.com/Carmelitas.Descalzas.Florida.Uruguay/?locale=es_LA";
const mvdInstagramUrl = "https://www.instagram.com/monjascarmelitas/?hl=es";

export const NavegationBar = ({ hide }: { hide: boolean }) => {
  return (
    <nav className={`nav-bar ${hide ? "hidden" : ""}`}>
      <ul>
        <li>
          <a
            onClick={() => window.scrollTo(0, 0)}
            className={`${hide ? "hidden" : ""}`}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            onClick={(ev) => {
              ev.preventDefault();
              window.open(mvdInstagramUrl);
            }}
            href={mvdInstagramUrl}
            className={`${hide ? "hidden" : ""}`}
          >
            Montevideo
          </a>
        </li>
        <li>
          <a
            className={`${hide ? "hidden" : ""}`}
            onClick={(ev) => {
              ev.preventDefault();
              window.open(floridaFacebookUrl);
            }}
            href={floridaFacebookUrl}
          >
            Florida
          </a>
        </li>
        <li>
          <a className={`${hide ? "hidden" : ""}`}>Contacto</a>
        </li>
      </ul>
    </nav>
  );
};
