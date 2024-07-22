import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';


export const initializeTimes = () => {
  return ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedGroupSize, setSelectedGroupSize] = useState('4');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [confirmationSMS, setConfirmationSMS] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState(false);
  const [acceptChanges, setAcceptChanges] = useState(false);
  const [formValid, setFormValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (formData) => {
    console.log('Form submitted', formData);
  };

  return (
    <main>
      <div className="details-content">
        <h2>Personal Details</h2>
        <p>Fill out the details.</p>
        <BookingForm
          selectedDate={selectedDate} setSelectedDate={setSelectedDate}
          selectedTime={selectedTime} setSelectedTime={setSelectedTime}
          selectedGroupSize={selectedGroupSize} setSelectedGroupSize={setSelectedGroupSize}
          firstName={firstName} setFirstName={setFirstName}
          lastName={lastName} setLastName={setLastName}
          email={email} setEmail={setEmail}
          phone={phone} setPhone={setPhone}
          specialRequest={specialRequest} setSpecialRequest={setSpecialRequest}
          confirmationSMS={confirmationSMS} setConfirmationSMS={setConfirmationSMS}
          confirmationEmail={confirmationEmail} setConfirmationEmail={setConfirmationEmail}
          acceptChanges={acceptChanges} setAcceptChanges={setAcceptChanges}
          formValid={formValid} setFormValid={setFormValid}
          errorMessage={errorMessage} setErrorMessage={setErrorMessage}
          onSubmit={handleFormSubmit}
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
      </div>
    </main>
  );
};

export default BookingPage;