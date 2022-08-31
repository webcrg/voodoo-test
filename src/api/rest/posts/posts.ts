import makeRequest from '@/api/make-request';
import { BASE_URL, ROUTES } from '@/api/settings';

function getPosts() {
  const url = BASE_URL + ROUTES.POSTS;
  return makeRequest({ url });
}

export { getPosts };
