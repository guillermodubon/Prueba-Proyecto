import { useState } from 'react';
import { toast } from 'react-hot-toast'; 

const useFormValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  
  const validateForm = () => {
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!password) {
      toast.error('Password is required.');
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 6 characters long and contain at least one uppercase letter, one number, and one special character.');
      return false;
    }

    if (name && name.length < 4) {
      toast.error('Name should be at least 4 characters long.');
      return false;
    }

    return true;
  };

  return {
    email,
    password,
    name,
    setEmail,
    setPassword,
    setName,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    validateForm,
  };
};

export default useFormValidation;

