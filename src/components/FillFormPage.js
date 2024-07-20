import React, { useState } from "react";
import './FillFormPage.css';
import NavigateButton from "./NavigateButton";
import DatePickerComponent from "./DatePickerComponent";
import TimePickerComponent from "./TimePickerComponent";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SelectGroupSizeComponent from "./SelectGroupSizeComponents";
import SubmitButton from "./SubmitButton";

const FillFormPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date ());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedGroupSize, setSelectedGroupSize] = useState ('4')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [confirmationSMS, setConfirmationSMS] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState(false);
  const [acceptChanges, setAcceptChanges] = useState(false);
  const [formValid, setFormValid] = useState(true);

  const handleSubmit = () => {
    if (
      selectedDate && selectedTime && selectedGroupSize &&
      firstName && lastName && phone && acceptChanges
    ) {
      setFormValid(true);
      return true;
    } else {
      setFormValid(false);
      return false;
    }
  };

  return (
    <main>
      <div className="details-content">
        <h2>Personal Details</h2>
        <p>Fill out the details.</p>
        <form className="personal-details">
          <div className="form-group">
            <label htmlFor="datePicker">Date*</label>
            <DatePickerComponent />
          </div>
          <div className="form-group">
            <label htmlFor="timePicker">Time*</label>
              <TimePickerComponent selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
          </div>
          <div className="form-group">
            <label htmlFor="goup-size">Group size*</label>
              <SelectGroupSizeComponent selectedGroupSize={selectedGroupSize} setSelectedGroupSize={setSelectedGroupSize} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone*</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="specialRequest">Special Requests</label>
            <textarea id="specialRequest" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
          </div>
          <div className="form-group-checkbox">
            <input type="checkbox" id="confirmationSMS" checked={confirmationSMS} onChange={(e) => setConfirmationSMS(e.target.checked)} />
            <label htmlFor="confirmationSMS">Send the booking confirmation cia Email.</label>
          </div>
          <div className="form-group-checkbox">
            <input type="checkbox" id="confirmationEmail" checked={confirmationEmail} onChange={(e) => setConfirmationEmail(e.target.checked)} />
            <label htmlFor="confirmationEmail">Send a booking confirmation via SMS.</label>
          </div>
          <div className="form-group-checkbox">
            <input type="checkbox" id="acceptChanges" checked={acceptChanges} onChange={(e) => setAcceptChanges(e.target.checked)} required />
            <label htmlFor="acceptChanges">I accept the booking terms and any changes to the Reservation.*</label>
          </div>
          {!formValid && <p className="error-message">All required fields must be filled out!</p>}
          <div className="button-group">
            <SubmitButton onSubmit={handleSubmit} to="/confirmation">
              Confirm Reservation
            </SubmitButton>
            <NavigateButton to="/" >
              Cancel
            </NavigateButton>
          </div>
        </form>
      </div>
    </main>
  );
}

export default FillFormPage;