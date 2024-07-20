import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmitButton.css'

const SubmitButton = ({ onSubmit, to, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    if (onSubmit()) {
      navigate(to);
    }
  };

  return (
    <button className='submit-button' onClick={handleClick}>
      {children}
    </button>
  );
};

export default SubmitButton;