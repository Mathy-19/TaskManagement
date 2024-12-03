import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation'; 
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
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
      
        navigate("/Login")
      
    }
  };

  return (
    <div className="form-container">
      <h2 class="login-form">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
          
          />
          {errors.email && <span class="text-danger">{errors.email}</span>}
        </div>

        <div class="form-group">
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

        <div class="form-actions">
          
          <button type="submit" class="btn-submit">Login</button>
          
          <Link to="/signup">
            <button type="button" class="btn-link">Create Account</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
