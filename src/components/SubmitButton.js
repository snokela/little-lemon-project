import React from 'react';
import './SubmitButton.css'

const SubmitButton = ({ children }) => {
  return (
    <button className='submit-button' type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;