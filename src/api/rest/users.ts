import makeRequest from '@/api/make-request';
import { BASE_URL, ROUTES } from '@/api/settings';

function getUsers() {
  return makeRequest({ url: BASE_URL + ROUTES.USERS });
}

export { getUsers };
