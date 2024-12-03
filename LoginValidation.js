function LoginValidation(values) {
    let errors = {};
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
    if (!values.email) {
      errors.email = "Email required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email invalid";
    } if (!values.password) {
      errors.password = "Password  required";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password must be 8 characters, include uppercase, number, and  special character";
    }
  
    return errors;
  }
  
  export default LoginValidation;
  