import React from "react";
import confirmImg from '../images/confirmationImg.png'
import './ConfirmationPage.css'
import NavigateButton from "./NavigateButton";

const ConfirmationPage = () => {
  return (
    <main>
      <div className="confirmation-content">
        <h1>Reservation Confirmed Successfully!</h1>
        <h3>Thank you for your table reservation at Little Lemon restaurant!</h3>
        <p>We are pleased to confirm your reservation. </p>
        <img src={confirmImg} alt="Restaurant image" className="confirmation-image"/>
        <p>We look forward to serving you and your guests. If you have any questions or need to make changes to your reservation, please contact us at (312) 555-1234 or  reservations@littlelemon.com.</p>
        <p>You will also receive a confirmation of your reservation via your chosen method: email or SMS.</p>
      </div>
      <div className="button-group">
        <NavigateButton to="/booking">Edit Reservation</NavigateButton>
        <NavigateButton to="/">Back to Homepage</NavigateButton>
      </div>
    </main>
  );
}

export default ConfirmationPage;