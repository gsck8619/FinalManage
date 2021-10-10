import "./styles.css";
import Nav from "./AppComponent/NavigationBar";
import AddUser from "./AppComponent/AddUser";
import UpdateUser from "./AppComponent/UpdateUser";
import Users from "./AppComponent/Users";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {

    const [userData, setUserData] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);


    const fetchUsersData = async () => {
        const res = await axios.get('https://reqres.in/api/users');
        setUserData(res.data.data)
    }

    useEffect(() => {
        !userData && fetchUsersData();
    }, []);

    const removeUser = (id) => {
        const updatedUser = userData.filter(currentUser => {
            if (currentUser.id !== id) {
                return currentUser;
            }
        })
        setUserData(updatedUser)
    }

    const updateUser = (updatedUser) => {
        const updatedData = userData.map(currentUser => {
            if (currentUser.id === updatedUser.id) {
                currentUser = updatedUser
            }
            return currentUser;
        })

        setUserData(updatedData);
    }

    const addUser = (newUser) => {
        setUserData([...userData, newUser]);
    }

    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <>
                                    <Users
                                        userData={userData}
                                        removeUser={removeUser}
                                        setSelectedUser={setSelectedUser}
                                    />
                                </>
                            );
                        }}
                    ></Route>
                    <Route exact path="/AddUser">
                        <AddUser
                            addUser={addUser}
                            newUserId={userData?.length}
                        />
                    </Route>
                    <Route exact path="/UpdateUser">
                        <UpdateUser
                            selectedUser={selectedUser}
                            updateUser={updateUser}
                        />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
