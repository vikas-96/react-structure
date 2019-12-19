export const shape = (
  fieldname,
  fieldprintname,
  value,
  rules,
  min_number = null,
  max_number = null
) => {
  value = value.trim();
  switch (rules) {
    case "required":
      value.length > 0
        ? ""
        : { [fieldname]: fieldprintname + " field is required." };
      break;
    case "number":
      /^[0-9]+$/.test(value)
        ? ""
        : { [fieldname]: fieldprintname + " must be numeric." };
      break;
    case "email":
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)
        ? ""
        : { [fieldname]: fieldprintname + " must be valid email." };

      break;
    case "password":
      /^[A-Za-z]\w{8,30}$/.test(value)
        ? ""
        : { [fieldname]: fieldprintname + " must be valid." };
      break;
    case "min":
      value.length <= min_number
        ? ""
        : { [fieldname]: fieldprintname + " must be valid." };
      break;
    case "max":
      value.length >= max_number
        ? ""
        : { [fieldname]: fieldprintname + " must be valid." };
      break;
    case "custom":
      break;
    default:
      return true;
  }
};
