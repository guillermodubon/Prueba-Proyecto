import { clearForm } from './clearForm.js';

export const toggleForm = (isSignUp, setIsSignUp, setEmail, setPassword, setName) => {
  setIsSignUp(!isSignUp);
  clearForm(setEmail, setPassword, setName);
};
