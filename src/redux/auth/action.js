import { authAxios } from "../../helpers/authAxios";
import { handleErrorWithToast } from "../../helpers/toastMessage";
import { AUTH_USER, LOGOUT } from "./actionType";

export const authUserAction = (payload) => ({ type: AUTH_USER, payload });

export const authLogoutAction = () => ({ type: LOGOUT, payload: {} });

export const authRegisterAction =
  (userData, success, handleError) => async (dispatch) => {
    await authAxios
      .post(`/auth/register`, userData)
      .then(({ data }) => {
        dispatch(authUserAction(data));
        success();
      })
      .catch((error) => {
        handleError(error);
      });
  };

export const authLoginAction =
  (userData, success, handleError) => async (dispatch) => {
    await authAxios
      .post(`/auth/login`, userData)
      .then(({ data }) => {
        dispatch(authUserAction(data));
        success();
      })
      .catch((error) => {
        handleError(error);
      });
  };
