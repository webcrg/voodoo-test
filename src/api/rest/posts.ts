import makeRequest from '@/api/make-request';
import { BASE_URL, ROUTES } from '@/api/settings';

function getPosts() {
  return makeRequest({ url: BASE_URL + ROUTES.POSTS });
}

export { getPosts };
