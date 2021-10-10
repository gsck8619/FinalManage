import React from "react";
import { useHistory } from "react-router";
import "./Styles/AddUser.css";

export default function Users({ userData, removeUser, setSelectedUser }) {

    const history = useHistory();

    return (
        <>
            <div className="Users">
                {
                    userData && userData.map(currentUser => (
                        <div className="card" style={{ width: "15rem" }}>
                            <img
                                src={currentUser.avatar}
                                className="card-img-top"
                                alt={currentUser.first_name}
                            />
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <span>User Id : </span>
                                    <p>{currentUser.id}</p>
                                </li>
                                <li className="list-group-item">
                                    <span>First Name :</span>
                                    <p>{currentUser.first_name}</p>
                                </li>
                                <li className="list-group-item">
                                    <span>Last Name :</span>
                                    <p>{currentUser.last_name}</p>
                                </li>
                                <li className="list-group-item">
                                    <span>Email Id :</span>
                                    <p>{currentUser.email}</p>
                                </li>
                            </ul>
                            <div className="card-body">
                                <button type="button" class="btn btn-sm btn-warning"
                                    onClick={() => {
                                        setSelectedUser(currentUser);
                                        history.push('/UpdateUser')
                                    }}
                                >
                                    Update
                                </button>
                                <button type="button" class="btn btn-sm btn-danger"
                                    onClick={() => {
                                        removeUser(currentUser.id)
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
