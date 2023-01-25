import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import { Context } from "./Store";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
    const [state] = useContext(Context);

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
                        src={require("./images/output-onlinepngtools.png")}
                        alt="Music Reviewify Logo"
                        height={110}
                    />
                </NavLink>

                <div style={{ color: "black" }}>
                    {state.currentAccount["id"] ? (
                        <div style={{ fontSize: "20px" }}>
                            Hello, {state.currentAccount["username"]}!
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div>
                    {state.token ? (
                        <>
                            <Link
                                className="navbar-brand"
                                to="/reviews/all"
                                style={{ marginRight: "0px" }}>
                                <button className="btn btn-primary">
                                    All Reviews
                                </button>
                            </Link>
                            <Logout />
                            <NavLink
                                className="navbar-brand"
                                to="/reviews/user">
                                <Button>My Reviews</Button>
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <Link
                                className="navbar-brand"
                                to="/reviews/all"
                                style={{ marginRight: "0px" }}>
                                <button className="btn btn-primary">
                                    All Reviews
                                </button>
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
