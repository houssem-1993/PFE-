import { SHOW_ALERT, HIDE_ALERT } from "../constants/alertConstatnts";

const initialState = {
  isShow: false,
  message: null,
  status: null,
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        isShow: true,
        message: action.payload.message,
        status: action.payload.status,
      };
    case HIDE_ALERT:
      return initialState;

    default:
      return state;
  }
};
