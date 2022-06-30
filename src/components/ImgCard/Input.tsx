/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";

import classes from "./Input.module.css";

// type input = {
//     // input:object;
//   };

const Input = React.forwardRef((props: any, ref) => {
  return (
    <div className={classes.input}>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
