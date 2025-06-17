import { useState, useEffect, useCallback } from 'react';


export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 

  // Initialize available times when component mounts
  useEffect(() => {
    initializeTimes();
  }, []);

  const updateTimes = useCallback((selectedDate) => {
    // Convert the selected date string to a Date object
    const dateObj = new Date(selectedDate);
    console.log('Selected date:', selectedDate, 'Date object:', dateObj, 'Date.getDate():', dateObj.getDate());
    
    // Use the fetchAPI function with the selected date
    const times = window.fetchAPI ? window.fetchAPI(dateObj) : [];
    console.log('Available times from API:', times);
    
    setAvailableTimes(times);
    
    // Reset time selection if current time is no longer available
    if (formData.time && !times.includes(formData.time)) {
      setFormData(prev => ({ ...prev, time: '' }));
    }
  }, [formData.time]);

  // Update available times when date changes
  useEffect(() => {
    if (formData.date) {
      updateTimes(formData.date);
    }
  }, [formData.date, updateTimes]);

  const initializeTimes = () => {
    // Create a Date object to represent today's date
    const today = new Date();
    console.log('Today:', today, 'Today.getDate():', today.getDate());
    
    // Use the fetchAPI function to return available times for today's date
    const times = window.fetchAPI ? window.fetchAPI(today) : [];
    console.log('Initial available times:', times);
    
    setAvailableTimes(times);
  };

  // Generate guest options (1-10 guests)
  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  // Get today's date for min date validation
  const today = new Date().toISOString().split('T')[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else if (formData.date < today) {
      newErrors.date = 'Please select a future date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Please select number of guests';
    }

    if (!formData.occasion) {
      newErrors.occasion = 'Please select an occasion';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsLoading(true);
      
      // Use the submitAPI function from the external script
      const result = window.submitAPI ? window.submitAPI(formData) : false;
      
      if (result) {
        setIsSubmitted(true);
        console.log('Booking submitted successfully:', formData);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ date: '', time: '', guests: '1', occasion: '' });
          setIsLoading(false);
        }, 3000);
      } else {
        // Handle submission failure
        setIsLoading(false);
        alert('Failed to submit reservation. Please try again.');
      }
    }
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (isSubmitted) {
    return (
      <div className="booking-container">
        <div className="confirmation-content">
          <div className="success-icon">
            <svg className="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="confirmation-title">Booking Confirmed!</h2>
          <p className="confirmation-details">
            Your table for {formData.guests} guest{formData.guests !== '1' ? 's' : ''} on{' '}
            {new Date(formData.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}{' '}
            at {formatTime(formData.time)} has been reserved for your {formData.occasion.toLowerCase()}.
          </p>
          <p className="confirmation-footer">
            We look forward to serving you at Little Lemon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-container">
      <div className="header">
        <h1 className="restaurant-name">Little Lemon</h1>
        <h2 className="form-title">Reserve Your Table</h2>
      </div>

      <div className="form-content">
        {/* Date Field */}
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={today}
            className={`form-input ${errors.date ? 'error' : ''}`}
          />
          {errors.date && <p className="error-message">{errors.date}</p>}
        </div>

        {/* Time Field */}
        <div className="form-group">
          <label htmlFor="time" className="form-label">
            Time *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={`form-input ${errors.time ? 'error' : ''}`}
            disabled={!formData.date || availableTimes.length === 0}
          >
            <option value="">
              {!formData.date ? 'Please select a date first' : 
               availableTimes.length === 0 ? 'No times available' : 
               'Select a time'}
            </option>
            {availableTimes.map(time => (
              <option key={time} value={time}>
                {formatTime(time)}
              </option>
            ))}
          </select>
          {errors.time && <p className="error-message">{errors.time}</p>}
          {formData.date && availableTimes.length === 0 && (
            <p className="warning-message">No available times for this date. Please select another date.</p>
          )}
        </div>

        {/* Number of Guests Field */}
        <div className="form-group">
          <label htmlFor="guests" className="form-label">
            Number of Guests *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className={`form-input ${errors.guests ? 'error' : ''}`}
          >
            {guestOptions.map(num => (
              <option key={num} value={num.toString()}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          {errors.guests && <p className="error-message">{errors.guests}</p>}
        </div>

        {/* Occasion Field */}
        <div className="form-group">
          <label htmlFor="occasion" className="form-label">
            Occasion *
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            className={`form-input ${errors.occasion ? 'error' : ''}`}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && <p className="error-message">{errors.occasion}</p>}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`submit-button ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Submitting...' : 'Submit Reservation'}
        </button>
      </div>

      <div className="required-note">
        * Required fields
      </div>
    </div>
  );
}