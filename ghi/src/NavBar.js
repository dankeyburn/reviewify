import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import { useAuthContext } from "./UseToken";
import { Context } from "./Store";
import React, { useContext } from "react";
import { useState } from "react";
import UserReviews from "./UserReviews";
import { Button } from "react-bootstrap";

function NavBar() {
    const [context] = useContext(Context);
    const [state] = useContext(Context);
    const { token } = useAuthContext();

    return (
        <nav
            className="navbar navbar-expand-md navbar-dark"
            style={{
                backgroundColor: "#efeee8",
                fontFamily: "Gill Sans, sans-serif",
                height: "120px",
                borderBottom: "2px solid black",
            }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={require("./output-onlinepngtools.png")}
                        alt="Music Reviewify Logo"
                        height={110}
                    />
                </NavLink>

                <div style={{ color: "black" }}>
                    {state.currentAccount["id"] ? (
                        <div>Hello, {state.currentAccount["username"]}!</div>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    {state.token ? (
                        <>
                            <Logout />
                            <NavLink
                                className="navbar-brand"
                                to="/reviews/user">
                                <Button>My Reviews</Button>
                            </NavLink>
                        </>
                    ) : (
                        <>
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
