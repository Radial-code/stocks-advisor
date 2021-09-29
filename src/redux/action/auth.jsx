import { LoginApi, SignUpApi } from "../api/auth";

export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const SIGN_UP_SUCCESSFULLY = "SIGN_UP_SUCCESSFULLY";

/**
 * Login action
 * @param {Object} data
 * @returns
 */
export const LoginSuccess = (data) => ({
  type: LOGIN_SUCCESSFULLY,
  data,
});

export const loginAction = (data, setLoading, history) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await LoginApi(data);
    if (response.success) {
      dispatch(LoginSuccess(response));
      setLoading(false);
      history.push("/");
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

/**
 * Sign up action
 * @param {Object} data
 * @returns
 */
const SignUpSuccess = (data) => ({
  type: SIGN_UP_SUCCESSFULLY,
  data,
});

export const SignUpAction = (data, setLoading, history) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await SignUpApi(data);
    if (response.success) {
      dispatch(SignUpSuccess(response.user));
      setLoading(false);
      history.push("/");
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};
