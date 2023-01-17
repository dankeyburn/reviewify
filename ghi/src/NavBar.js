import { NavLink } from "react-router-dom";

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
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#c69f3a",
                            color: "#efeee8",
                            borderColor: "black",
                            border: "2px solid black",
                        }}>
                        <NavLink className="navbar-brand" to="/">
                            Home
                        </NavLink>
                    </button>
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#c69f3a",
                            color: "#efeee8",
                            borderColor: "black",
                            border: "2px solid black",
                        }}>
                        Login
                    </button>
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#c69f3a",
                            color: "#efeee8",
                            borderColor: "black",
                            border: "2px solid black",
                        }}>
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;

{
  /* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">   Launch demo modal </button> */
}
