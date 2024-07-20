import React from 'react';

const SelectGroupSizeComponent = ({ selectedGroupSize, setSelectedGroupSize }) => {
  const groupSizes = [
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: 'contact', label: '>11 (Contact Restaurant)' }
  ];

  const handleChange = (event) => {
    setSelectedGroupSize(event.target.value);
  };

  return (
    <div className="select-group-component">
      <label htmlFor="groupSize"></label>
      <select id="groupSize" value={selectedGroupSize} onChange={handleChange} required>
        <option value="" disabled>Select group size</option>
        {groupSizes.map((group, index) => (
          <option key={index} value={group.value}>{group.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectGroupSizeComponent;