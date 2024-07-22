import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes, fetchAPI } from './components/BookingPage';

// Mocking useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('Renders the Date Picker with required attribute', () => {
  render(<BookingForm />);
  const datePicker = screen.getByLabelText(/Date/i);
  const dateInput = datePicker.querySelector('input') || datePicker;
  expect(dateInput).toBeRequired();
});

test('Renders the Time Picker with required attribute', () => {
  render(<BookingForm />);
  const timePicker = screen.getByLabelText(/Time/i);
  const timeInput = timePicker.querySelector('input') || timePicker;
  expect(timeInput).toBeRequired();
});

test('Renders the Group Size Picker with required attribute', () => {
  render(<BookingForm />);
  const groupSizePicker = screen.getByLabelText(/Group size/i);
  const groupSizeSelect = groupSizePicker.querySelector('select') || groupSizePicker;
  expect(groupSizeSelect).toBeRequired();
});
test('Renders the First Name input with required attribute', () => {
  render(<BookingForm />);
  const firstNameInput = screen.getByLabelText('First Name*');
  expect(firstNameInput).toBeRequired();
});

test('Renders the Last Name input with required attribute', () => {
  render(<BookingForm />);
  const lastNameInput = screen.getByLabelText('Last Name*');
  expect(lastNameInput).toBeRequired();
});

test('Renders the Email input with email type', () => {
  render(<BookingForm />);
  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toHaveAttribute('type', 'email');
});

test('Renders the Phone input with required attribute and tel type', () => {
  render(<BookingForm />);
  const phoneInput = screen.getByLabelText('Phone*');
  expect(phoneInput).toBeRequired();
  expect(phoneInput).toHaveAttribute('type', 'tel');
});

test('Renders the Accept Changes checkbox with required attribute', () => {
  render(<BookingForm />);
  const acceptChangesCheckbox = screen.getByLabelText('I accept the booking terms and any changes to the Reservation.*');
  expect(acceptChangesCheckbox).toBeRequired();
});

// Mocking fetchAPI function
jest.mock('./components/BookingPage', () => ({
  ...jest.requireActual('./components/BookingPage'),
  fetchAPI: jest.fn(),
}));

// Unit test for initializeTimes function
test('initializeTimes dispatches the correct array of times', async () => {
  const mockDispatch = jest.fn();
  const mockTimes = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  fetchAPI.mockResolvedValue(mockTimes);

  await initializeTimes(mockDispatch);

  expect(mockDispatch).toHaveBeenCalledWith({ type: 'INITIALIZE_TIMES', payload: mockTimes });
});

// Unit test for updateTimes function
test('updateTimes dispatches the correct array of times for UPDATE_TIMES action', async () => {
  const mockDispatch = jest.fn();
  const mockDate = new Date('2024-07-22');
  const mockTimes = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  fetchAPI.mockResolvedValue(mockTimes);

  await updateTimes(mockDispatch, mockDate);

  expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: mockTimes });
});
