import get from "lodash/get";

export default function(error) {
  let message = error.message;
  if (error.response && error.response.status === 422) {
    const errors = get(error, "response.data.errors", []);
    const errorKey = Object.keys(errors)[0];
    return get(errors, errorKey + "[0]");
  }

  if (error.response && error.response.status === 417) {
    message = error.response.data.message;
  }

  return message;
}
