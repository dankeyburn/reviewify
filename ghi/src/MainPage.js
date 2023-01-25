import SearchBar from "./Search";

function MainPage() {
    return (
        <div>
            <div className="logo-container" id="hide-item1">
                <img
                    src={require("./images/logo-512.png")}
                    height="256"
                    alt="Reviewify Logo"
                />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    );
}

export default MainPage;
