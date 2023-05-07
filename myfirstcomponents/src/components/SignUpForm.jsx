import React, { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      const newData = {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };

      setSubmittedData([...submittedData, newData]);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleDelete = (index) => {
    const updatedData = [...submittedData];
    updatedData.splice(index, 1);
    setSubmittedData(updatedData);
  };

  return (
    <div className="signup-form">
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
           className="form-input"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit"  className="submit-button">Submit</button>
      </form>
      <h3>Submitted Data:</h3>
      {submittedData.length === 0 ? (
        <p>No data submitted yet</p>
      ) : (
        <ul  className="submitted-data-list">
          {submittedData.map((data, index) => (
            <li key={index} className="submitted-data-item">
              <strong>Email:</strong> {data.email},{" "}
              <strong>Password:</strong> {data.password},{" "}
              <strong>Confirm Password:</strong> {data.confirmPassword}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SignUpForm;
