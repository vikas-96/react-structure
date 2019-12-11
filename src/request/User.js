import axios from "axios";

export function getRole() {
  return axios
    .get(process.env.REACT_APP_API_URL + "/api/roles")
    .then(response => response.data);
}

// insert user
export function createUser(data) {
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/users/", data, {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    })
    .then(response => response.data);
}
