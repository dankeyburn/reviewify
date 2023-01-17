import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

function LoginModal() {
  const [show, setShow] = useState(false);
  const [passwordConfirm, setpasswordConfirm] = useState({
    passwordConfirm: "",
  });
  const [account, setAccount] = useState({
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setpasswordConfirm({...passwordConfirm, [event.target.name]: event.target.value });
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...account };
    console.log(data)
    if (data.password === passwordConfirm.passwordConfirm){
      console.log(data);
      const accountsUrl = "http://localhost:8000/token/";
      const fetchConfig = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          },
      };
      const response = await fetch(accountsUrl, fetchConfig);
      if (response.ok) {
          const Login = await response.json();
          setAccount({
            password: "",
            email: "",
        })
          setpasswordConfirm({
            passwordConfirm: "",
          });
      } else {
          console.error("Error in logging in");
      }}
      else {console.error("Passwords do not match")};
  };

  return (
    <>
    <button
            onClick={() => setShow(true)}
            className="btn btn-primary"
          >
            Login
          </button>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        className="modal fade bd-example-modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              onChange={handleChange}
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="email"
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
            <label className="form-check-label" htmlFor="password">
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
              value={passwordConfirm.passwordConfirm}
            />
            <label className="form-check-label" htmlFor="passwordConfirm">
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

export default LoginModal;
