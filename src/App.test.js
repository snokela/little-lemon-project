import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/BookingPage'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Mocking useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Test for static text in the BookingForm component
test('Renders the First Name Label', () => {
  render(
      <BookingForm />
  );
  const labelElement = screen.getByText("First Name*");
  expect(labelElement).toBeInTheDocument();
});

// Unit test for initializeTimes function
test('initializeTimes returns the correct array of times', () => {
  const expectedTimes = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  initializeTimes().then((times) => {
    expect(times).toEqual(expectedTimes);
  });
});

// Unit test for updateTimes function
test('updateTimes returns the correct array of times for UPDATE_TIMES action', () => {
  const initialState = [];
  const action = { type: 'UPDATE_TIMES', payload: new Date() };
  const expectedTimes = ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const updateTimesValue = updateTimes(initialState, action);
  expect(updateTimesValue).toEqual(expectedTimes);
});
