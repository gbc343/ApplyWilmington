// /scripts/test-api.ts
import axios from 'axios';

(async () => {
  const res = await axios.get('http://host.docker.internal:3000/applicant');
  console.log(res.data);
})();