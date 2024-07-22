import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import './BookingPage.css';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorageUtils';

// Simuloidaan API-funktiot suoraan tässä tiedostossa
const fetchAPI = async (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    }, 500);
  });
};

const submitAPI = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 500);
  });
};

export const initializeTimes = async (dispatch) => {
  const today = new Date().toISOString().split('T')[0];
  const times = await fetchAPI(today);
  dispatch({ type: 'INITIALIZE_TIMES', payload: times || [] });
};

export const updateTimes = async (dispatch, date) => {
  const times = await fetchAPI(date);
  dispatch({ type: 'UPDATE_TIMES', payload: times || [] });
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.payload;
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

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

  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes(dispatch);
  }, [dispatch]);

  const updateTimesHandler = async (date) => {
    const times = await fetchAPI(date.toISOString().split('T')[0]);
    dispatch({ type: 'UPDATE_TIMES', payload: times || [] });
  };

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      saveToLocalStorage('BookingForm', formData);
      navigate('/confirmation');
      console.log('Form submitted successfully!:', formData)
    } else {
      console.error('Form submission failed');
    }
  };

  return (
    <main>
      <div className="details-content">
        <h2>Personal Details</h2>
        <p>Fill out the details.</p>
        <BookingForm
          selectedDate={selectedDate}
          setSelectedDate={(date) => {
            setSelectedDate(date);
            updateTimesHandler(date);
          }}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          selectedGroupSize={selectedGroupSize}
          setSelectedGroupSize={setSelectedGroupSize}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          specialRequest={specialRequest}
          setSpecialRequest={setSpecialRequest}
          confirmationSMS={confirmationSMS}
          setConfirmationSMS={setConfirmationSMS}
          confirmationEmail={confirmationEmail}
          setConfirmationEmail={setConfirmationEmail}
          acceptChanges={acceptChanges}
          setAcceptChanges={setAcceptChanges}
          formValid={formValid}
          setFormValid={setFormValid}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          onSubmit={submitForm}
          availableTimes={availableTimes}
        />
      </div>
    </main>
  );
};

export default BookingPage;