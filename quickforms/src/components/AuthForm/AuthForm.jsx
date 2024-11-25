import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './AuthForm.css';
import { toggleForm } from '../../utils/AuthFormUtils/toggleForm.js';
import useFormValidation from '../../hooks/useFormValidation.js'; 
import { Toaster } from 'react-hot-toast'; 

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const {
    email,
    password,
    name,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    validateForm,
    setEmail,
    setPassword,
    setName,
  } = useFormValidation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid. Submit form!');
    }
  };

  return (
    <>
      <Toaster /> 

      <Box className="auth-form" component="form" onSubmit={handleFormSubmit}>
        <Typography variant="h5" className="auth-title">
          {isSignUp ? 'SIGN UP HERE!' : 'LOG IN HERE!'}
        </Typography>

        {isSignUp && (
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            className="auth-input"
            value={name}
            onChange={handleNameChange}
            required
          />
        )}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          className="auth-input"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          className="auth-input"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button
          variant="contained"
          fullWidth
          className="auth-button"
          sx={{ marginTop: 2 }}
          type="submit"
        >
          {isSignUp ? 'Sign up' : 'Log in'}
        </Button>
        <Button
          variant="text"
          fullWidth
          className="toggle-button"
          sx={{ marginTop: 1 }}
          onClick={() => toggleForm(isSignUp, setIsSignUp, setEmail, setPassword, setName)}
        >
          {isSignUp ? 'Log in' : 'Sign up'}
        </Button>
      </Box>
    </>
  );
};

export default AuthForm;



