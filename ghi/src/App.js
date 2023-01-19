import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ReviewForm from "./ReviewForm";
import SeeReviews from "./SeeReviews";
import AllReviews from './AllReviews';
import "./Styles.css";
import { AuthProvider, useToken } from "./UseToken";

function GetToken() {
    useToken();
    return null;
}

function App() {
    // const navigate = useNavigate();

    return (
        <AuthProvider>
            <BrowserRouter>
                <GetToken />
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/reviews/new" element={<ReviewForm />} />
                        <Route path="/reviews" element={<SeeReviews />} />
                        <Route path = "/reviews/all" element={<AllReviews />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
