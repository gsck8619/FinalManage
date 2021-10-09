import React from "react";
import "./Styles/NavigationBar.css";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            PeopleManagement
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/AddUser">
                  Add User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/UpdateUser">
                  Update User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/RemoveUser">
                  Remove User
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Feature"
                aria-label="Go"
              />
              <button className="btn btn-outline-success" type="submit">
                Go
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
