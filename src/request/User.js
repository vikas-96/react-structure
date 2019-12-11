import axios from "axios";

export function getRole() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/api/roles")
    .then(response => response.data);
}
