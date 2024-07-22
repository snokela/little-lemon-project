import React from "react";
import { useNavigate } from "react-router-dom";
import './NavigateButton.css'

const NavigateButton = ({to, children, ariaLabel}) => {
  const navigate = useNavigate();

  return (
    <button
     className="navigate-button"
     onClick={() => navigate(to)}
     aria-label={ariaLabel}
     >
      {children}
    </button>
  );
};

export default NavigateButton;