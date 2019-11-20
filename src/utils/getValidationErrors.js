import notify from "./notify";
import getErrorMessage from "./getErrorMessage";

export default function(props) {
  let errorData = {};
  if (
    props.isValidationError &&
    props.error &&
    props.error.response &&
    props.error.response.status === 422
  ) {
    let fields = props.error.response.data.errors;
    Object.keys(fields).forEach(function(key) {
      errorData[key] = fields[key][0];
    });
    return errorData;
  }
  if (props.isValidationError && props.error) {
    notify({
      type: "error",
      text: getErrorMessage(props.error)
    });

    return false;
  }

  return {};
}
