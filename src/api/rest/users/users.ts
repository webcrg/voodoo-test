import makeRequest from '@/api/make-request';
import { BASE_URL, ROUTES } from '@/api/settings';

async function getUsers() {
  const url = BASE_URL + ROUTES.USERS;
  return makeRequest({ url });
}

export { getUsers };
