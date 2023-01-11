// import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-md navbar-dark"
            style={{
                backgroundColor: "orange",
                fontFamily: "Gill Sans, sans-serif",
                height: "100px",
            }}>
            <div className="container-fluid">
                <button>Login</button>
                <button>Signup</button>
            </div>
        </nav>
    );
}
export default NavBar;
