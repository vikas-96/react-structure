import axios from "axios";

export function login(data = {}) {
  return axios
    .post(process.env.REACT_APP_API_URL + "/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: null
      }
    })
    .then(response => response.data);
  // response.data);
}

// export function logout(data = {}) {
//   return axios
//     .post(process.env.REACT_APP_API_URL + "/api/auth/logout")
//     .then(response => response.data);
// }

// export function forgot(data = {}) {
//   return axios
//     .post(process.env.REACT_APP_API_URL + "/api/auth/password/forget", data, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: null
//       }
//     })
//     .then(response => response.data);
// }

// export function reset(data = {}) {
//   return axios
//     .post(process.env.REACT_APP_API_URL + "/api/auth/password/reset", data, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: null
//       }
//     })
//     .then(response => response.data);
// }

// export function getUserDetail(data = {}) {
//   return axios
//     .post(process.env.REACT_APP_API_URL + "/api/get-user-detail", data, {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${data}`
//       }
//     })
//     .then(response => response.data);
// }
