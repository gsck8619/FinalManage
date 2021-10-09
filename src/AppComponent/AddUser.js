import React from "react";
import "./Styles/AddUser.css";

export default function AddUser() {
  return (
    <>
      <div className="FormContainer">
        <form method="POST">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-sm btn-outline-success">
                Add User
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
