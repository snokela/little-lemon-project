import React from 'react';

const TimePickerComponent = ({ selectedTime, setSelectedTime, availableTimes }) => {
  const handleChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="time-picker-dropdown">
      <label htmlFor="timePicker"></label>
      <select id="timePicker" value={selectedTime} onChange={handleChange} required>
        <option value="" disabled>Select a time</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default TimePickerComponent;
// import React from 'react';

// const TimePickerDropdown = ({ selectedTime, setSelectedTime }) => {
//   const times = [
//     '11:00',
//     '12:00', '13:00', '14:00',
//     '15:00', '16:00', '17:00',
//     '18:00', '19:00', '20:00',
//     '21:00', '22:00'
//   ];

//   const handleChange = (event) => {
//     setSelectedTime(event.target.value);
//   };

//   return (
//     <div className="time-picker-dropdown">
//       <label htmlFor="timePicker"></label>
//       <select id="timePicker" value={selectedTime} onChange={handleChange} required>
//         <option value="" disabled>Select a time</option>
//         {times.map((time, index) => (
//           <option key={index} value={time}>{time}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default TimePickerDropdown;