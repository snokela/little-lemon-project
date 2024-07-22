import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

const BookingPage = () => {
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
    // Voit käsitellä lomakkeen tiedot täällä
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
        />
      </div>
    </main>
  );
};

export default BookingPage;

// import React from 'react';
// import BookingForm from './BookingForm';
// import './BookingPage.css'

// const BookingPage = () => {
//   const handleFormSubmit = () => {
//     console.log('Form submitted');
//   };

//   return (
//     <main>
//       <div className="details-content">
//         <h2>Personal Details</h2>
//         <p>Fill out the details.</p>
//         <BookingForm onSubmit={handleFormSubmit} />
//       </div>
//     </main>
//   );
// };

// export default BookingPage;