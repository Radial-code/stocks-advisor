import Swal from "sweetalert2";
import {
  LoginApi,
  SignUpApi,
  UserNameApi,
  resetPasswordApi,
  getUserProfileApi,
} from "../api/auth";

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
      dispatch(LoginSuccess(response["x-api-key"]));
      localStorage.setItem("stock-advisor", response["x-api-key"]);
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
      dispatch(SignUpSuccess(response));
      localStorage.setItem("stock-advisor", response["x-api-key"]);
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
 * Get user profile action
 * @param {Object} data
 * @returns
 */
const getUserProfile = (data) => ({
  type: SIGN_UP_SUCCESSFULLY,
  data,
});

export const getUserProfileAction =
  (setLoading, history) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getUserProfileApi();
      if (response.success) {
        dispatch(getUserProfile(response.user));
        setLoading(false);
        history.push("/");
      } else {
        setLoading(false);
        history.push("/signup");
      }
    } catch (error) {
      setLoading(false);
      history.push("/signup");
    }
  };

/**
 * username action*
 * @param {Object} setUserNameError
 * @returns
 */

export const UserNameAction = (data, setUserNameError) => async (dispatch) => {
  try {
    const response = await UserNameApi(data);
    if (response.success) {
    } else {
      setUserNameError(response);
    }
  } catch (error) {
    console.log(error.response, "kuch bhi");
  }
};

/**
 * username action*
 * @param {Object} data
 * @returns
 */

export const resetPasswordAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await resetPasswordApi(data);
    if (response.success) {
      setLoading(false);
    } else {
      setLoading(false);
      Swal.fire("Error!", `Failed to authenticate token`, "error");
      setTimeout(Swal.close, 4000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
