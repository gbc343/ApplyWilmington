

export async function getUsers() {
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local setup.');
  }

  const res = await fetch(`${API_BASE}/job-posting/`);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return await res.json();
}
// services/userService.ts
export const postUser = async (userData: { Title: string; Date: string; Website: string; Description: string }) => {
  console.log('Calling postUser with:', userData); // ✅ add this

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local and build process.');
  }

  const response = await fetch(`${API_BASE}/job-posting/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });



  if (!response.ok) throw new Error('Failed to create user');
  return await response.json();
};

export const updateJobPosting = async (id: string, updateData: { Title: string; Date: string; Website: string; Description: string }) => {
  try {
    console.log('Sending PATCH to:', `${process.env.NEXT_PUBLIC_API_BASE_URL}/job-postings/${id}`);
    console.log('Payload:', updateData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/job-posting/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });

    if (!res.ok) throw new Error('Failed to update job posting');

    return await res.json();
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};