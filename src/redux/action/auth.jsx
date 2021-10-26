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
  ChangePasswordApi,
  LogoutApi,
} from "../api/auth";

export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY";
export const SIGN_UP_SUCCESSFULLY = "SIGN_UP_SUCCESSFULLY";
export const GET_USER_PROFILE_LIST = "GET_USER_PROFILE_LIST";
export const GET_LOCAL_STORAGE_TOKEN = "GET_LOCAL_STORAGE_TOKEN";
export const REMOVE_LOCAL_STORAGE_TOKEN = "REMOVE_LOCAL_STORAGE_TOKEN";

/**
 * get Local Storage Token
 * @returns
 */
export const getLocalStorageToken = () => ({
  type: GET_LOCAL_STORAGE_TOKEN,
  token: localStorage.getItem("stock-advisor"),
});

/**
 * remove Local Storage Token
 * @returns
 */
export const Logout = () => ({
  type: REMOVE_LOCAL_STORAGE_TOKEN,
});

export const LogoutAction = (setLoadingLogOut, history) => async (dispatch) => {
  setLoadingLogOut(true);
  try {
    const response = await LogoutApi();
    if (response.success) {
      dispatch(Logout);
      localStorage.setItem("stock-advisor", null);
      setLoadingLogOut(false);
      history.push("/");
      window.location.reload();
    } else {
      setLoadingLogOut(false);
    }
  } catch (error) {
    setLoadingLogOut(false);
  }
};

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
      if (!response.user.isAdmin) {
        if (response.user.isPaidPlan) {
          history.push("/portfolio/portfolio1");
        } else {
          history.push("/our-plan");
        }
      } else {
        history.push("/");
      }
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
      history.push("/our-plan");
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
const getUserProfile = (data, token) => ({
  type: GET_USER_PROFILE_LIST,
  payload: {
    token: token,
    data: data,
  },
});

export const getUserProfileAction = (setLoading, token) => async (dispatch) => {
  setLoading(true);
  try {
    const response = await getUserProfileApi();
    if (response.success) {
      dispatch(getUserProfile(response.data, token));
      setLoading(false);
    } else {
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
  }
};

/**
 * username action*
 * @param {Object} setUserNameError
 * @returns
 */

export const UserNameAction = (data, setUserNameError) => async () => {
  try {
    const response = await UserNameApi(data);
    if (response.success) {
    } else {
      setUserNameError(response);
    }
  } catch (error) {
    console.log(error.response);
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
 * username action*
 * @param {Object} data
 * @returns
 */
export const ChangePasswordAction = (data, setLoading) => async () => {
  setLoading(true);
  try {
    const response = await ChangePasswordApi(data);
    if (response.success) {
      setLoading(false);
      Swal.fire("Success!", `Password change sucessfully`, "success");
      setTimeout(Swal.close, 2000);
    } else {
      setLoading(false);
      Swal.fire("Error!", `Failed to Change Password`, "error");
      setTimeout(Swal.close, 2000);
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
export const verfiyEmailTokenAction = (data, history, userData) => async () => {
  try {
    const response = await verfiyEmailTokenApi(data);
    if (response.success) {
      Swal.fire("success!", `Your Email is verified successfully`, "success");
      setTimeout(history.push("/verify/mobile-otp/resend"), 4000);
      setTimeout(window.reload(), 4000);
    }

    //
    else {
      if (userData.isEmailConfirmed) {
        Swal.fire("success!", `Your Email is verified successfully`, "success");
        setTimeout(history.push("/verify/mobile-otp/resend"), 4000);
        setTimeout(window.reload(), 4000);
      }
      setTimeout(window.reload(), 4000);
    }
  } catch (error) {
    // Swal.fire("Error!", "Something went wrong", "error");
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
      Swal.fire(
        "Success",
        `A verification email has been sent to your email`,
        "success"
      );
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
        Swal.fire("success!", `OTP Verify Successfully`, "success");
        setTimeout(
          userData.isPaidPlan ? history.push("/") : history.push("/our-plan"),
          3000
        );
        setTimeout(window.reload(), 3000);
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
      history.push("/verify/mobile-otp/resend");
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
