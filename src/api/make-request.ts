import axios from 'axios';

const makeRequest = ({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {},
}) =>
  axios({
    url,
    method,
    headers,
    params,
    data,
  });

export default makeRequest;
