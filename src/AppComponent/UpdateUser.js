import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Styles/AddUser.css";

export default function UpdateUser({ selectedUser, updateUser }) {
    const history = useHistory();

    const [userFirstName, setUserFirstName] = useState(selectedUser?.first_name);
    const [userLastName, setUserLastName] = useState(selectedUser?.last_name);
    const [userEmail, setUserEmail] = useState(selectedUser?.email);

    useEffect(() => {
        !selectedUser && history.push('/')
    }, []);

    const editUser = (event) => {
        event.preventDefault();

        const updatedUserData = {
            id: selectedUser.id,
            avatar: selectedUser.avatar,
            first_name: userFirstName,
            last_name: userLastName,
            email: userEmail
        }

        updateUser(updatedUserData);
        history.push('/');
    }

    return (
        <>
            <div className="FormContainer">
                <form method="POST">
                    <div className="row">
                        <div className="col">
                            <input
                                value={'User Id: ' + selectedUser?.id}
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                aria-label="First name"
                                required
                                disabled
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input
                                value={userFirstName}
                                onChange={(event) => setUserFirstName(event.target.value)}
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
                                value={userLastName}
                                onChange={(event) => setUserLastName(event.target.value)}
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
                                value={userEmail}
                                onChange={(event) => setUserEmail(event.target.value)}
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
                            <button type="submit" className="btn btn-sm btn-outline-success"
                                onClick={editUser}
                            >
                                Update User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
