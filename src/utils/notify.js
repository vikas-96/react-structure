import Noty from "noty";
import "noty/lib/noty.css";
import "noty/lib/themes/bootstrap-v4.css";

export default function(opts) {
  return new Noty(
    Object.assign(
      {
        type: "success",
        layout: "topRight",
        timeout: 3000,
        closeWith: ["click", "button"]
      },
      opts
    )
  ).show();
}
