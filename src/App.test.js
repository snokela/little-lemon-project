import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes, fetchAPI } from './components/BookingPage';

// Mocking useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Test for static text in the BookingForm component
test('Renders the First Name Label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("First Name*");
  expect(labelElement).toBeInTheDocument();
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