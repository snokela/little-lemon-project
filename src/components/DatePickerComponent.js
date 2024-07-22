import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePickerComponent = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className='date-picker-container'>
      <label htmlFor="datePicker"></label>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        minDate={new Date()}
      />
    </div>
  );
};

export default DatePickerComponent;