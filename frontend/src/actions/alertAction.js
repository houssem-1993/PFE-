import { SHOW_ALERT, HIDE_ALERT } from "../constants/alertConstatnts";

const defaultStatus = ["success", "danger", "info"];

let timeOut = null;

export const showAlert =
  (message, status, time = 3000) =>
  (dispatch) => {
    //CLEARS OLD TIMEOUT IF EXISTING
    clearTimeout(timeOut);

    // If status dosent exist in defaultStatus
    if (!defaultStatus.includes(status)) {
      status = "info";
    }

    //HIDE THE OLD ALERT
    dispatch({ type: HIDE_ALERT });

    //SHOW THE ALERT
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        status,
      },
    });
    // SAVE in timeOut variable the reference of setTimeOut and hide the alert after time
    timeOut = setTimeout(() => dispatch({ type: HIDE_ALERT }), time);
  };
