import notify from "./notify";

const setTimeoutFn = props => {
  notify({
    type: "success",
    text: props.message
  });
  setTimeout(() => {
    props.history.replace(props.path);
  }, props.time);
};

export default setTimeoutFn;
