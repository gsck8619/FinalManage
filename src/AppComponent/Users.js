import React from "react";
import "./Styles/AddUser.css";

export default function Users() {
  return (
    <>
      <div className="Users">
        <div className="card" style={{ width: "15rem" }}>
          <img
            src="https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1"
            className="card-img-top"
            alt="..."
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>User Id : </span>
              <p>A third item</p>
            </li>
            <li className="list-group-item">
              <span>First Name :</span>
              <p>A third item</p>
            </li>
            <li className="list-group-item">
              <span>Last Name :</span> <p>A third item</p>
            </li>
            <li className="list-group-item">
              <span>Email Id :</span>
              <p>A third item</p>
            </li>
          </ul>
          <div className="card-body">
            <button type="button" class="btn btn-sm btn-warning">
              Update
            </button>
            <button type="button" class="btn btn-sm btn-danger">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
