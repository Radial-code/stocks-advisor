import Swal from "sweetalert2";
import {
  LoginApi,
  SignUpApi,
  UserNameApi,
  resetPasswordApi,
  getUserProfileApi,
  verfiyEmailTokenApi,
  verfiyEmailApi,
  verfiyMobileOtpApi,
  resendOtpApi,
} from "../api/auth";

export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const SIGN_UP_SUCCESSFULLY = "SIGN_UP_SUCCESSFULLY";
export const GET_USER_PROFILE_LIST = "GET_USER_PROFILE_LIST";

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
      Swal.fire(
        "Error!",
        `${
          response && response.response && response.response.data
            ? response.response.data.message
            : "You have entered wrong email or password"
        }`,
        "error"
      );
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
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
      Swal.fire(
        "Error!",
        `${
          response && response.response && response.response.data
            ? response.response.data.message
            : "something went wrong"
        }`,
        "error"
      );
      setTimeout(Swal.close, 2000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};

/**
 * Get user profile action
 * @param {Object} data
 * @returns
 */
const getUserProfile = (data) => ({
  type: GET_USER_PROFILE_LIST,
  payload: {
    token: localStorage.getItem("stock-advisor"),
    data: data,
  },
});

export const getUserProfileAction =
  (setLoading, history) => async (dispatch) => {
    setLoading(true);
    try {
      const response = await getUserProfileApi();
      if (response.success) {
        dispatch(getUserProfile(response.data));
        setLoading(false);
        history.push("/");
      } else {
        setLoading(false);
        history.push("/");
      }
    } catch (error) {
      setLoading(false);
      history.push("/");
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

/**
 * verfiy Email Token action*
 * @param {Object} data
 * @returns
 */
export const verfiyEmailTokenAction =
  (data, setLoading, history) => async () => {
    setLoading(true);
    try {
      const response = await verfiyEmailTokenApi(data);
      if (response.success) {
        setLoading(false);
        setTimeout(history.push("/verify/mobile-otp"), 4000);
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

/**
 * verfiy Email action*
 * @param {Object} data
 * @returns
 */
export const verfiyEmailAction = (setLoading) => async () => {
  setLoading(true);
  try {
    const response = await verfiyEmailApi();
    if (response.success) {
      setLoading(false);
      Swal.fire("Success", `Check your mail to verify your e-mail`, "error");
      setTimeout(Swal.close, 4000);
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

/**
 * verfiy Email action*
 * @param {Object} data
 * @returns
 */
export const verfiyMobileOtpAction =
  (data, setLoading, history, userData) => async () => {
    setLoading(true);
    try {
      const response = await verfiyMobileOtpApi(data);
      if (response.success) {
        setLoading(false);
        setTimeout(
          userData.isPaidUser
            ? history.push("/portfolio/portfolio1")
            : history.push("/"),
          3000
        );
      } else {
        setLoading(false);
        Swal.fire("Error!", `Failed to authenticate Otp`, "Try again");
        setTimeout(Swal.close, 4000);
      }
    } catch (error) {
      setLoading(false);
      Swal.fire("Error!", "Something went wrong", "error");
      setTimeout(Swal.close, 2000);
    }
  };

/**
 * Resend OTP action*
 * @param {Object} data
 * @returns
 */
export const resendOtpAction = (data, setLoading, history) => async () => {
  setLoading(true);
  try {
    const response = await resendOtpApi(data);
    if (response.success) {
      setLoading(false);
      history.push("/verify/mobile-otp");
    } else {
      setLoading(false);
      Swal.fire("Error!", `Failed to authenticate Mobile number`, "Try again");
      setTimeout(Swal.close, 4000);
    }
  } catch (error) {
    setLoading(false);
    Swal.fire("Error!", "Something went wrong", "error");
    setTimeout(Swal.close, 2000);
  }
};
