import React from "react";
import { useRef, useState , Fragment  } from "react";

import Input from "./Input";

const MealItemForm = (props:any) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<any>();

  const submitHandler = (event:any) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Fragment>
    <form  onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
    </Fragment>
  );
};

export default MealItemForm;
