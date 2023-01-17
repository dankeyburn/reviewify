import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

function SignupModal() {
    const [show, setShow] = useState(false);
    const [account, setAccount] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        username: "",
    });

    const handleChange = (event) => {
        setAccount({ ...account, [event.target.name]: event.target.value });
        console.log(account);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { ...account };
        if (data.password === data.passwordConfirm) {
            console.log(data);
            const accountsUrl = "http://localhost:8000/api/accounts/";
            const fetchConfig = {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const response = await fetch(accountsUrl, fetchConfig);
            if (response.ok) {
                const newaccount = await response.json();
                setAccount({
                    email: "",
                    password: "",
                    passwordConfirm: "",
                    username: "",
                });
            } else {
                console.error("Error in creating review");
            }
        } else {
            console.error("Passwords do not match");
        }
    };

    return (
        <>
            <button onClick={() => setShow(true)} className="btn btn-primary">
                Signup
            </button>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                className="modal fade bd-example-modal-lg"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleChange}
                                className="form-control"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="username"
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
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={account.email}
                            />
                            <label className="form-check-label" htmlFor="email">
                                Email
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
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleChange}
                                className="form-control"
                                type="password"
                                name="passwordConfirm"
                                id="passwordConfirm"
                                placeholder="Confirm Password"
                                value={account.passwordConfirm}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="passwordConfirm">
                                Confirm Password
                            </label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SignupModal;
