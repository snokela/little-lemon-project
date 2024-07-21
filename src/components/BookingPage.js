import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css'

const BookingPage = () => {
  const handleFormSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <main>
      <div className="details-content">
        <h2>Personal Details</h2>
        <p>Fill out the details.</p>
        <BookingForm onSubmit={handleFormSubmit} />
      </div>
    </main>
  );
};

export default BookingPage;