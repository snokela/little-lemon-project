import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className='date-picker-container'>
      {/* <span className="date-picker-icon">
        <i className="fas fa-calendar-alt"></i>
      </span> */}
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
