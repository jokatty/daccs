import axios from 'axios';

axios.defaults.withCredentials = true;

// get the user details
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
export default async function getUserData() {
  console.log('backend function is called');
  const response = await axios.get(REACT_APP_BACKEND_URL);
  console.log(response.data[0]);
  return response.data[0];
}
