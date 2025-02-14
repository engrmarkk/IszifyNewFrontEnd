import {
  axiosGet,
  axiosPost,
  axiosPatch,
  axiosDelete,
} from "./request.service";

//

export const getAllLinks = async (
  queryObject: any,
  page: any,
  per_page: any
) => {
  const queryParams = "?" + new URLSearchParams(queryObject).toString();
  return await axiosGet(
    `url_shortener/short_urls${queryParams}&page=${page}&per_page=${per_page}`
  );
};

//
export const getSingleUrlLink = async (id) => {
  return await axiosGet(`url_shortener/short_url/${id}`);
};

//
export const postQrLink = async (data: any) => {
  return await axiosPost("url_shortener/short_url/create", data);
};
//
export const createStyleQrCode = async (data: any) => {
  return await axiosPost("url_shortener/create_qr_short", data);
};
//
export const EditUrlLink = async (id, data: any) => {
  return await axiosPatch(`url_shortener/short_url/${id}`, data);
};
