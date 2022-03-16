import axios from 'axios';

axios.defaults.withCredentials = true;

// get the user details
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
export async function getUserData() {
  console.log('backend function is called');
  const response = await axios.get(REACT_APP_BACKEND_URL);
  console.log(response.data[0]);
  return response.data[0];
}

// callback to update user details
export async function updateUserData(updatedData) {
  console.log('update fucntion is called');
  console.log(updatedData);
  const response = await axios.post(`${REACT_APP_BACKEND_URL}/update`, updatedData);
  console.log(response.status);
  return response.status;
}
