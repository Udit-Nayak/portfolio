// API Configuration
const API_BASE_URL = '/api'; // All requests will be handled by the same domain

export const API_ENDPOINTS = {
  BOOKINGS: `${API_BASE_URL}/bookings`,
};

export const createBooking = async (bookingData: any) => {
  try {
    const response = await fetch(API_ENDPOINTS.BOOKINGS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create booking');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const getBookings = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.BOOKINGS);
    
    if (!response.ok) {
      throw new Error('Failed to fetch bookings');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
}; 