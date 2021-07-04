import axios from "axios";
import { showAlert } from "./alertAction";
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_DETAILS_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_FAIL,
  NEWS_DELETE_SUCCESS,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_SUCCESS,
} from "../constants/newsConstants";

export const listNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST });

    const { data } = await axios.get("/api/news");
    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listNewsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/news/${id}`);

    dispatch({
      type: NEWS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Baerer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/news/${id}`, config);

    dispatch(showAlert("News has been deleted with success", "success"));

    dispatch({
      type: NEWS_DELETE_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: NEWS_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createNews = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Baerer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/news/`, {}, config);

    dispatch(showAlert("News has been created with success", "success"));

    dispatch({
      type: NEWS_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Baerer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/news/${news._id}`, news, config);

    dispatch(showAlert(`News has been updated with success`, "success"));

    dispatch({
      type: NEWS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEWS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
