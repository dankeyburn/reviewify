import React, { useEffect, useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { useEffect } from "react";
import { useToken } from "./UseToken";
import { useContext } from "react";
import { Context } from "./Store";

function LoginModal() {
    const [token, login] = useToken();
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({
        password: "",
        username: "",
    });
    const [state, dispatch] = useContext(Context);
    const [currentAccount, updateCurrent] = useState(state.currentAccount);

    const handleChange = (event) => {
        setAccount({ ...account, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { username: account.username, password: account.password };
        event.preventDefault();
        let formData = null;
        formData = new FormData();
        formData.append("username", account.username);
        formData.append("password", account.password);
        console.log(data);
        const accountsUrl = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/token/`;
        const fetchConfig = {
            method: "POST",
            body: formData,
            credentials: "include",
        };
        const response = await fetch(accountsUrl, fetchConfig);
        if (response.ok) {
            await response.json();
            dispatch({ type: "login" });
            setAccount({
                password: "",
                username: "",
            });
        } else {
            console.error("Error in logging in");
        }
        const accountsUrl2 = `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/token/`;
        const fetchConfig2 = {
            method: "GET",
            credentials: "include",
        };
        fetch(accountsUrl2, fetchConfig2)
            .then((response) => response.json())
            .then((data) => {
                let accountData = {
                    id: data.account["id"],
                    email: data.account["email"],
                    username: data.account["username"],
                };
                dispatch({ type: "update_current", payload: accountData });
            });
    };
    console.log(state);

    return (
        <>
            <button onClick={() => setShow(true)} className="btn btn-primary">
                Login
            </button>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                className="modal fade bd-example-modal-lg"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: "black" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleChange}
                                className="form-control"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={account.username}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="username">
                                Username
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleChange}
                                className="form-control"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={account.password}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="password">
                                Password
                            </label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
