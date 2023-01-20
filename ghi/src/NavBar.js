import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
import { useAuthContext } from "./UseToken";
import createStore from "./Store";

function NavBar() {
    const { token } = useAuthContext();
    const [useStore, dispatch] = createStore(0);

    const addToCount = () => {
        <button onClick={() => dispatch((count) => count + 1)}>hello</button>;
    };
    const count = useStore();

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
                <div>{count}</div>
                <button onClick={() => dispatch((count) => count + 1)}>
                    hello
                </button>
                <NavLink className="navbar-brand" to="/">
                    <img
                        src={require("./output-onlinepngtools.png")}
                        alt="Music Reviewify Logo"
                        height={110}
                    />
                </NavLink>
                <div>
                    {token ? (
                        <></>
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

{
    /* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">   Launch demo modal </button> */
}
