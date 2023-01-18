import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ReviewForm from "./ReviewForm";
import SeeReviews from "./SeeReviews";
import AllReviews from './AllReviews';
import "./Styles.css";

function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <div>
            <Routes>
                <Route path = "/" element={<MainPage />} />
                <Route path = "/reviews/new" element={ <ReviewForm />} />
                <Route path = "/reviews" element={<SeeReviews />} />
                <Route path = "/reviews/all" element={<AllReviews />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
