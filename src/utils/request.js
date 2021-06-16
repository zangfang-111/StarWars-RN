import 'whatwg-fetch';
import axios from "axios";

const parseJSON = response => {
  return response.json()
};

const checkStatus = (response) => {
  if (response.status > 200 && response.status < 300) {
    return response;
  }
  return response.data.results
};

export default function* get(path) {
  const options = { method: 'get' };
  return yield axios.get(path).then(checkStatus);
}