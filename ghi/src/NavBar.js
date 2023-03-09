import { NavLink } from "react-router-dom";
import SignupModal from "./Accounts/SignupModal";
import LoginModal from "./Accounts/LoginModal";
import Logout from "./Accounts/Logout";
import { Context } from "./Store";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  const [state] = useContext(Context);

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            id="light-nav-logo"
            src={require("./images/output-onlinepngtools.png")}
            alt="Music Reviewify Logo"
            height={110}
          />
          <img
            id="dark-nav-logo"
            src={require("./images/dark-reviewify-png.png")}
            alt="Music Reviewify Logo"
            height={110}
          />
        </NavLink>

        <div>
          {state.currentAccount["id"] ? (
            <div className="hello-message">
              Hello, {state.currentAccount["username"]}!
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          {state.token ? (
            <>
              <Link className="navbar-brand all-reviews" to="/reviews/all">
                <Button className="btn btn-primary">All Reviews</Button>
              </Link>
              <Logout />
              <NavLink className="navbar-brand" to="/reviews/user">
                <Button className="btn btn-primary">My Reviews</Button>
              </NavLink>
            </>
          ) : (
            <>
              <Link className="navbar-brand all-reviews" to="/reviews/all">
                <Button className="btn btn-primary">All Reviews</Button>
              </Link>
              <LoginModal />
              <SignupModal />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
