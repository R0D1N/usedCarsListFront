import { Link } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const renderNavLink = ({ name, path }) => (
  <li className="nav-item" key={name}>
    <Link className="nav-link" to={path}>
      {name}
    </Link>
  </li>
);

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ChinaRio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBar"
          aria-controls="navBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {NAV_LINKS.map(renderNavLink)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
