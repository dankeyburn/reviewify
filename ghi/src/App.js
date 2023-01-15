import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ReviewForm from "./ReviewForm";

function App() {
    return (
        <BrowserRouter>
        <NavBar />
        <div>
            <Routes>
                <Route path = "/" element={<MainPage />} />
                <Route path = "/reviews/new" element={ <ReviewForm />} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
