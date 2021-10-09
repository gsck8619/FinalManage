import "./styles.css";
import Nav from "./AppComponent/NavigationBar";
import AddUser from "./AppComponent/AddUser";
import UpdateUser from "./AppComponent/UpdateUser";
import Users from "./AppComponent/Users";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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
                  <Users />
                </>
              );
            }}
          ></Route>
          <Route exact path="/AddUser">
            <AddUser />
          </Route>
          <Route exact path="/UpdateUser">
            <UpdateUser />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
