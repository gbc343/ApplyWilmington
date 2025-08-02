import axios from 'axios'

export async function getUsers() {
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local setup.');
  }
  try{
  const res =  await axios.get(`${API_BASE}/job-posting/`);
  return res.data;;
  } catch (err) {
  throw err;
  }
}

export const postUser = async (userData: { Title: string; Date: string; Website: string; Description: string }) => {
  console.log('Calling postUser with:', userData);

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local and build process.');
  }

  try {
    const response = await axios.post(`${API_BASE}/job-posting/create`, userData);
    return response.data;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }

};


export const updateJobPosting = async (
  id: string,
  updateData: { Title: string; Date: string; Website: string; Description: string }
) => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local and build process.');
  }

  const url = `${API_BASE}/job-posting/${id}`;
  console.log('Sending PATCH to:', url);
  console.log('Payload:', updateData);

  try {
    const response = await axios.patch(url, updateData);
    return response.data;
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};
