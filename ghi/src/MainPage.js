import SearchBar from "./Search";

function MainPage() {
  return (
  <div>
    <div className="logo-container" id="hide-item1">
      <img src={require("./logo-512.png")} height="256"/>
    </div>
    <div className="logo-container" id="hide-item2">
      <img src={require("./Reviewify-title.png")} height="128"/>
    </div>
    <div>
      <SearchBar/>
    </div>
  </div>
  );
}

export default MainPage;
