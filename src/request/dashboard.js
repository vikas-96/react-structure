import axios from "axios";

export function dashboard() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/api/dashboard")
    .then(response => response.data);
}
