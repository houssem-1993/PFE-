import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

import styles from "./alert.module.css";

const AlertComponent = () => {
  const { message, status, isShow } = useSelector(
    (state) => state.alertReducer
  );

  console.log({ message, status, isShow });

  return (
    <div class={styles["alert-component"]}>
      <Alert show={isShow} variant={status} transition={true}>
        {message}
      </Alert>
    </div>
  );
};

export default AlertComponent;
