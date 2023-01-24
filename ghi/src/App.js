import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ReviewForm from "./ReviewForm";
import SeeReviews from "./SeeReviews";
import AllReviews from "./AllReviews";
import "./Styles.css";
import { useAuthContext } from "./UseToken";
import { Context } from "./Store";
import React, { useContext, useEffect } from "react";
import { useState } from "react";

function App() {
    const [context] = useContext(Context);
    const [state, dispatch] = useContext(Context);
    // const [currentAccount, updateCurrent] = useState(state.account);
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
    console.log(state);

    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/reviews/new" element={<ReviewForm />} />
                    <Route path="/reviews" element={<SeeReviews />} />
                    <Route path="/reviews/all" element={<AllReviews />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
