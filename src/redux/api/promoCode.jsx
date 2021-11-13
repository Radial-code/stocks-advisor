import { axiosRequest } from "../helper";

/**
 * Get Promo code list Api
 * @returns
 */
export const getPromoCodeListApi = async () => {
  return await axiosRequest("GET", `/promo-code`);
};

/**
 * Get Promo code Details Api
 * @param {String} Id
 * @returns
 */
export const getPromoCodeDetailsApi = async (id) => {
  return await axiosRequest("GET", `/promo-code/${id}`);
};

/**
 * Upload new Promo code Api
 * @param {Object} data
 * @returns
 */
export const uploadNewPromoCodeApi = async (data) => {
  return await axiosRequest("POST", `/promo-code`, data);
};

/**
 * update Promo code Api
 * @param {Object} data
 *  @param {String} id
 * @returns
 */
export const updatePromoCodeApi = async (id, data) => {
  return await axiosRequest("PUT", `/promo-code/${id}`, data);
};

/**
 * Delete Promo code Api
 *  @param {String} id
 * @returns
 */
export const DeletePromoCodeApi = async (id) => {
  return await axiosRequest("DELETE", `/promo-code/${id}`);
};

/**
 * Verify Promo code Api
 *  @param {String} id
 * @returns
 */
export const verifyPromoCodeApi = async (data) => {
  return await axiosRequest("POST", `/promo-code/verify`, data);
};
