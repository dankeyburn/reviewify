import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

function NavBar() {
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
                <div>
                    <LoginModal />
                    <SignupModal />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;

{
    /* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">   Launch demo modal </button> */
}
