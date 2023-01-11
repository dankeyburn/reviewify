function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-md navbar-dark"
            style={{
                backgroundColor: "#E7772F",
                fontFamily: "Gill Sans, sans-serif",
                height: "120px",
                borderBottom: "2px solid black",
            }}>
            <div className="container-fluid">
                <img
                    src="https://kornan.dreamhosters.com/musicr/"
                    alt="Music Reviewify Logo"
                    height={90}
                />
                <div>
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#3E6D9C",
                            color: "white",
                            borderColor: "#3E6D9C",
                        }}>
                        Login
                    </button>
                    <button
                        className="btn btn-primary"
                        style={{
                            marginRight: "10px",
                            backgroundColor: "#001253",
                            color: "white",
                            borderColor: "#001253",
                        }}>
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
