import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ReviewForm from "./ReviewForm";
import EditReviewForm from "./EditReviewForm";
import SeeReviews from "./SeeReviews";
import AllReviews from "./AllReviews";
import UserReviews from "./UserReviews";
import "./Styles.css";
import { useAuthContext } from "./UseToken";
import { Context } from "./Store";
import React, { useContext, useEffect } from "react";

function App() {
    const [state, dispatch] = useContext(Context);
    const { token } = useAuthContext();

    useEffect(() => {
        const accountsUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/token/`;
        const fetchConfig = {
            method: "GET",
            credentials: "include",
        };
        fetch(accountsUrl, fetchConfig)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    let accountData = {
                        id: data.account["id"],
                        email: data.account["email"],
                        username: data.account["username"],
                    };
                    dispatch({ type: "update_current", payload: accountData });
                }
            });
        if (token) {
            dispatch({ type: "login" });
        } else {
            dispatch({ type: "logout" });
        }
    }, [token, dispatch]);

    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/reviews/new" element={<ReviewForm />} />
                    <Route
                        path="/reviews/update"
                        element={<EditReviewForm />}
                    />
                    <Route path="/reviews" element={<SeeReviews />} />
                    <Route path="/reviews/all" element={<AllReviews />} />
                    <Route path="/reviews/user" element={<UserReviews />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
