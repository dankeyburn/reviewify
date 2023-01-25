import SearchBar from "./Search";
import {Link} from "react-router-dom"

function MainPage() {
  return (
  <div>
    <div className="logo-container" id="hide-item1">
      <img src={require("./logo-512.png")} height="256"/>
    </div>
    <div>
      <SearchBar/>
    </div>
  </div>
  );
}

export default MainPage;
