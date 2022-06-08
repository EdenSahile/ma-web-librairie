import React from 'react';
import '../../App.css'
const Navbar = ({onTextChange,query,submit}) => {

  

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-green fixed-top">
        <div className="container-fluid">
          <a to="/" className="navbar-brand">
            <i className="fas fa-shopping-cart me-2"></i> Ma E-book librairie{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Livre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  E-book
                </a>
              </li>
            </ul>
            <form className="form d-flex " onSubmit={(e)=>submit(e)} >
              <input
                className="form-control me-2"
                type="search"
                placeholder="ex: ean-titre-nom auteur ..."
                aria-label="Search"
               value={query}
                onChange={(e)=>onTextChange(e)}
              />
              <button className="btn btn-outline-light" 
              type="submit"
              >
                Rechercher
              </button>
            </form>
            <div className="menu-right">
              <a to="/cart">
                <i className="fa fa-shopping-bag fa-2x grey"></i>
              </a>
              <span className="badge rounded-circle">2</span>
            </div>
          </div>
        </div>
      </nav>
    );
};
export default Navbar;