import axios from 'axios';

// get the user details
const BACKEND_URL = 'http://localhost:3004/';
export default async function getUserData() {
  const response = await axios.get(BACKEND_URL);
  console.log(response);
  return response;
}
