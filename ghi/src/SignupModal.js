import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

function SignupModal() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        className="modal fade bd-example-modal-lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              onChange={handleChange}
              className="form-check-input"
              type="text"
              name="username"
              id="username"
              value={user.username}
            />
            <label className="form-check-label" htmlFor="username">
              Username:
            </label>
          </div>
          <div>
            <input
              onChange={handleChange}
              className="form-check-input"
              type="text"
              name="password"
              id="password"
              value={user.password}
            />
            <label className="form-check-label" htmlFor="password">
              Password:
            </label>
          </div>
          <div>
            <input
              onChange={handleChange}
              className="form-check-input"
              type="text"
              name="passwordConfirm"
              id="passwordConfirm"
              value={user.passwordConfirm}
            />
            <label className="form-check-label" htmlFor="passwordConfirm">
              Confirm Password:
            </label>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignupModal;
