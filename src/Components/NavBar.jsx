import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => (
  <header>
    <nav className="navbar navbar-expand-lg  navbar-dark menu shadow fixed-top">
      <div className="container">
        <img
          src="./Logo Empresa DC.png"
          alt="LogoEmpresa_Nav"
          width="60px"
        />
        <a className="navbar-brand" href="MantencionesDC">
          Mantenciones DC
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="./index.html">
                Accesorios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                Componentes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                Ropa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                Mantenciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="*">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="notificacion">1</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);