import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Styles/AddUser.css";

export default function AddUser({ addUser, newUserId }) {
    const history = useHistory();

    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const addNewUser = (event) => {
        event.preventDefault();

        const newUser = {
            id: newUserId + 1,
            avatar: 'https://reqres.in/img/faces/' + (newUserId + 1) + '-image.jpg',
            first_name: userFirstName,
            last_name: userLastName,
            email: userEmail
        }

        addUser(newUser);
        history.push('/');
    }

    return (
        <>
            <div className="FormContainer">
                <form method="POST">
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
                                onClick={addNewUser}
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
