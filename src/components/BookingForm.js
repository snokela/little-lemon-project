import React from 'react';
import { useNavigate } from 'react-router-dom';
import DatePickerComponent from './DatePickerComponent';
import TimePickerComponent from './TimePickerComponent';
import SelectGroupSizeComponent from './SelectGroupSizeComponent';
import SubmitButton from './SubmitButton';
import NavigateButton from './NavigateButton';
import './BookingForm.css';

const BookingForm = ({
  selectedDate, setSelectedDate,
  selectedTime, setSelectedTime,
  selectedGroupSize, setSelectedGroupSize,
  firstName, setFirstName,
  lastName, setLastName,
  email, setEmail,
  phone, setPhone,
  specialRequest, setSpecialRequest,
  confirmationSMS, setConfirmationSMS,
  confirmationEmail, setConfirmationEmail,
  acceptChanges, setAcceptChanges,
  formValid, setFormValid,
  errorMessage, setErrorMessage,
  onSubmit
}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedDate && selectedTime && selectedGroupSize &&
      firstName && lastName && phone && acceptChanges
    ) {
      setFormValid(true);
      setErrorMessage('');
      onSubmit({
        selectedDate,
        selectedTime,
        selectedGroupSize,
        firstName,
        lastName,
        email,
        phone,
        specialRequest,
        confirmationSMS,
        confirmationEmail,
      });
      navigate('/confirmation');
    } else {
      setFormValid(false);
      setErrorMessage('All required fields must be filled out!');
    }
  };

  return (
    <form className="personal-details" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='label' htmlFor="datePicker">Date*</label>
        <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      <div className="form-group">
        <label className='label' htmlFor="timePicker">Time*</label>
        <TimePickerComponent selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      </div>
      <div className="form-group">
        <label className='label'htmlFor="group-size">Group size*</label>
        <SelectGroupSizeComponent selectedGroupSize={selectedGroupSize} setSelectedGroupSize={setSelectedGroupSize} />
      </div>
      <div className="form-group">
        <label className='label' htmlFor="firstName">First Name*</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className='label' htmlFor="lastName">Last Name*</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label className='label' htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label className='label' htmlFor="phone">Phone*</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className='label' htmlFor="specialRequest">Special Requests</label>
        <textarea id="specialRequest" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
      </div>
      <div className="form-group-checkbox">
        <input type="checkbox" id="confirmationSMS" checked={confirmationSMS} onChange={(e) => setConfirmationSMS(e.target.checked)} />
        <label htmlFor="confirmationSMS">Send the booking confirmation via SMS.</label>
      </div>
      <div className="form-group-checkbox">
        <input type="checkbox" id="confirmationEmail" checked={confirmationEmail} onChange={(e) => setConfirmationEmail(e.target.checked)} />
        <label htmlFor="confirmationEmail">Send a booking confirmation via Email.</label>
      </div>
      <div className="form-group-checkbox">
        <input type="checkbox" id="acceptChanges" checked={acceptChanges} onChange={(e) => setAcceptChanges(e.target.checked)} required />
        <label htmlFor="acceptChanges">I accept the booking terms and any changes to the Reservation.*</label>
      </div>
      {!formValid && <p className="error-message">{errorMessage}</p>}
      <div className="button-group">
        <SubmitButton>Confirm Reservation</SubmitButton>
        <NavigateButton to="/">Cancel</NavigateButton>
      </div>
    </form>
  );
};

export default BookingForm;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import DatePickerComponent from './DatePickerComponent';
// import TimePickerComponent from './TimePickerComponent';
// import SelectGroupSizeComponent from './SelectGroupSizeComponent';
// import SubmitButton from './SubmitButton';
// import NavigateButton from './NavigateButton';
// import './BookingForm.css';

// const BookingForm = ({ onSubmit }) => {
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedGroupSize, setSelectedGroupSize] = useState('4');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [specialRequest, setSpecialRequest] = useState('');
//   const [confirmationSMS, setConfirmationSMS] = useState(false);
//   const [confirmationEmail, setConfirmationEmail] = useState(false);
//   const [acceptChanges, setAcceptChanges] = useState(false);
//   const [formValid, setFormValid] = useState(true);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Estetään lomakkeen oletustoiminto
//     if (
//       selectedDate && selectedTime && selectedGroupSize &&
//       firstName && lastName && phone && acceptChanges
//     ) {
//       setFormValid(true);
//       setErrorMessage('');
//       onSubmit({
//         selectedDate,
//         selectedTime,
//         selectedGroupSize,
//         firstName,
//         lastName,
//         email,
//         phone,
//         specialRequest,
//         confirmationSMS,
//         confirmationEmail,
//       });
//       navigate('/confirmation');
//     } else {
//       setFormValid(false);
//       setErrorMessage('All required fields must be filled out!');
//     }
//   };

//   return (
//     <form className="personal-details" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="datePicker">Date*</label>
//         <DatePickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="timePicker">Time*</label>
//         <TimePickerComponent selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="group-size">Group size*</label>
//         <SelectGroupSizeComponent selectedGroupSize={selectedGroupSize} setSelectedGroupSize={setSelectedGroupSize} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="firstName">First Name*</label>
//         <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//       </div>
//       <div className="form-group">
//         <label htmlFor="lastName">Last Name*</label>
//         <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div className="form-group">
//         <label htmlFor="phone">Phone*</label>
//         <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//       </div>
//       <div className="form-group">
//         <label htmlFor="specialRequest">Special Requests</label>
//         <textarea id="specialRequest" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
//       </div>
//       <div className="form-group-checkbox">
//         <input type="checkbox" id="confirmationSMS" checked={confirmationSMS} onChange={(e) => setConfirmationSMS(e.target.checked)} />
//         <label htmlFor="confirmationSMS">Send the booking confirmation via SMS.</label>
//       </div>
//       <div className="form-group-checkbox">
//         <input type="checkbox" id="confirmationEmail" checked={confirmationEmail} onChange={(e) => setConfirmationEmail(e.target.checked)} />
//         <label htmlFor="confirmationEmail">Send a booking confirmation via Email.</label>
//       </div>
//       <div className="form-group-checkbox">
//         <input type="checkbox" id="acceptChanges" checked={acceptChanges} onChange={(e) => setAcceptChanges(e.target.checked)} required />
//         <label htmlFor="acceptChanges">I accept the booking terms and any changes to the Reservation.*</label>
//       </div>
//       {!formValid && <p className="error-message">{errorMessage}</p>}
//       <div className="button-group">
//         <SubmitButton>Confirm Reservation</SubmitButton>
//         <NavigateButton to="/">Cancel</NavigateButton>
//       </div>
//     </form>
//   );
// };

// export default BookingForm;