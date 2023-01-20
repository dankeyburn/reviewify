import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import { useAuthContext } from "./UseToken";
import { Context } from "./Store";
import React, { useContext } from "react";

function NavBar() {
    const [context] = useContext(Context);
    const [state] = useContext(Context);
    console.log(state);
    return (
        <nav
            className="navbar navbar-expand-md navbar-dark"
            style={{
                backgroundColor: "#efeee8",
                fontFamily: "Gill Sans, sans-serif",
                height: "120px",
                borderBottom: "2px solid black",
            }}>
            <div style={{ color: "black" }}>{context.count}</div>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={require("./output-onlinepngtools.png")}
                        alt="Music Reviewify Logo"
                        height={110}
                    />
                </NavLink>
                <div>
                    {state.token ? (
                        <>
                            <button>logout</button>
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
