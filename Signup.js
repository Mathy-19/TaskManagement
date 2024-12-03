import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation'; 
import "./Login.css";

const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate=useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = LoginValidation(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
        navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2 class="register-form">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span class="text-danger">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword"><strong>Confirm Password</strong></label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span class="text-danger">{errors.confirmPassword}</span>}
        </div>

        <div className="form-actions">
          <button type="submit" class="btn-submit">Register</button>
          <Link to="/">
            <button type="button" class="btn-link">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
