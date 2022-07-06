/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props: any, ref) => {
  return (
    <div className={classes.input}>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
