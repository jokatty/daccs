import axios from 'axios';

axios.defaults.withCredentials = true;

// get the user details
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
export async function getUserData() {
  const response = await axios.get(REACT_APP_BACKEND_URL);
  return response.data[0];
}

// callback to update user details
export async function updateUserData(updatedData) {
  const response = await axios.post(`${REACT_APP_BACKEND_URL}/update`, updatedData);
  return response.status;
}
