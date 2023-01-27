import SearchBar from "./Reviews/Search";

function MainPage() {
    return (
        <div>
            <div className="logo-container" id="dark-logo">
                <img
                    src={require("./images/logo-512.png")}
                    height="256"
                    alt="Reviewify Logo Dark"
                />
            </div>
            <div className="logo-container" id="light-logo">
                <img
                    src={require("./images/light-logo-512.png")}
                    height="256"
                    alt="Reviewify Logo Light"
                />
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    );
}

export default MainPage;
