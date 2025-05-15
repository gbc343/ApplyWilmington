// services/userService.ts
export const postApplicant = async (userData: { Name: string; Date: string; Courses: string; Gpa: string,   Transcript: string, Status: string }) => {
  console.log('Calling postUser with:', userData); // ✅ add this

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!API_BASE) {
    throw new Error('API_BASE is undefined. Check your .env.local and build process.');
  }

  const response = await fetch(`${API_BASE}/applicant/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });



  if (!response.ok) throw new Error('Failed to create user');
  return await response.json();
};