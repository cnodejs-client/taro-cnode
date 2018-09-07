import Taro from "@tarojs/taro";
import * as actionTypes from "../constants/auth";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (user) => {
  return { type: actionTypes.AUTH_SUCCESS, ...user };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  // localStorage.removeItem('expirationDate');
  // localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (accesstoken) => {
  return dispatch => {
    dispatch(authStart());
    // const userInfo = { accesstoken: accesstoken };
    return Taro.request({
      method: "POST",
      url: "https://cnodejs.org/api/v1/accesstoken?accesstoken=" + accesstoken,
    })
      .then(response => {
        if (response.data && response.data.success) {
          let res = response.data;
          let user = {
            loginname: res.loginname,
            avatar_url: res.avatar_url,
            userId: res.id,
            token: accesstoken
          };
          // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(authSuccess(user));
          // localStorage.setItem("expirationDate", expirationDate);
          // localStorage.setItem("userId", response.data.localId);
          // dispatch(checkAuthTimeout(response.data.expiresIn));
        }
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('user');
    if (!token) {
      dispatch(logout());
    } else {
            //  const expirationDate = new Date(localStorage.getItem("expirationDate"));
             // && expirationDate <= new Date()
      if (false) {
        dispatch(logout());
      } else {
        // const userId = localStorage.getItem("userId");
        dispatch(authSuccess(JSON.parse(token)));
        // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
