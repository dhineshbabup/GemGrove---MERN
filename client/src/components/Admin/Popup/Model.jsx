import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Popup.module.css";
import Button from "../../UI/Button";
const Model = forwardRef(({ children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className={classes["result-modal"]}>
      {children}
      <form method="dialog">
        <Button style={classes['result-modal-button']}>ok</Button>
      </form>
    </dialog>
  );
});

export default Model;
