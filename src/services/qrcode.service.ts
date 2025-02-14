import {
  axiosGet,
  axiosPost,
  axiosPatch,
  axiosDelete,
} from "./request.service";

//
export const getAllqrCategorys = async () => {
  return await axiosGet("qr_code/qrcode-categories");
};

//
export const getAllQrCodes = async (
  queryObject: any,
  page: any,
  per_page: any
) => {
  const queryParams = "?" + new URLSearchParams(queryObject).toString();
  return await axiosGet(
    `qr_code/qrcode${queryParams}&page=${page}&per_page=${per_page}`
  );
};
//
export const UnAuthpostQrCode = async (data: any) => {
  return await axiosPost("unauth_qr_code/qrcode", data);
};
//
export const postQrCode = async (data: any) => {
  return await axiosPost("qr_code/qrcode", data);
};

//
export const getUpdateQrCode = async (id: any) => {
  return await axiosGet(`qr_code/qrcode/${id}`);
};
//
export const updateQrCode = async (id: any, data) => {
  return await axiosPatch(`qr_code/qrcode/${id}`, data);
};
//
export const getStyleQrCode = async (id: any) => {
  return await axiosGet(`qr_code/style_qrcode/${id}`);
};
export const deleteSingleQrcode = async (id: any) => {
  return await axiosDelete(`qr_code/delete_qrcode/${id}`, id);
};
//
export const postStyleQrCode = async (id: any, data: any) => {
  return await axiosPost(`qr_code/style_qrcode/${id}`, data);
};
