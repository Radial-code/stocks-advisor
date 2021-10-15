import Swal from "sweetalert2";
import { axiosRequest } from "./helper";

/**
 * Image upload api
 * @param {Object} data
 * @returns
 */
const uploadImageApi = async (type, data) => {
  return await axiosRequest("POST", `/file/upload/${type}`, data);
};

/** Image Type */
export const UPLOAD_IAMGE = "UPLOAD_IAMGE";
export const REMOVE_FILE_URL_LINK = "REMOVE_FILE_URL_LINK";

const uploadImageSuccess = (file) => ({
  type: UPLOAD_IAMGE,
  file,
});

//Remove File Url Link
export const RemoveFileUrlLink = () => ({
  type: REMOVE_FILE_URL_LINK,
});

/**
 * Upload Image Action
 * @param {Event} e
 * @param {Boolean} setLoadingImage
 * @param {String} type
 * @returns
 */
export const uploadImageAction =
  (e, setLoadingImage, type) => async (dispatch) => {
    setLoadingImage(true);
    try {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        const fileSize = file.size / 1024 / 1024;

        if (fileSize > 20) {
          Swal.fire("Opps!", "File must be less than 20 MB", "error");
          setTimeout(Swal.close, 2000);
          return;
        }

        // FORM DATA
        const form = new FormData();
        form.append("file", file);
        const response = await uploadImageApi(type, form);
        if (response.success) {
          dispatch(uploadImageSuccess(response.file));
          setLoadingImage(false);
        } else {
          setLoadingImage(false);
          Swal.fire(
            "Failed to upload Image!",
            "Please check your network connection",
            "error"
          );
          setTimeout(Swal.close, 2000);
          setLoadingImage(false);
        }
      }
    } catch (error) {
      setLoadingImage(false);
    }
  };
