import notify from "./notify";
import getErrorMessage from "./getErrorMessage";
import _ from "lodash";

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
    !_.isEmpty(errorData) &&
      notify({
        type: "error",
        text: "Please Check the Error Fields."
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
