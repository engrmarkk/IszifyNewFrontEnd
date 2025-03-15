import { axiosPostAuth, axiosPatchAuth } from "~/server/utils/axiosAuthHelper";

export default defineEventHandler(async (event) => {
  const { type, id } = getQuery(event); // Extract type from query parameters
  const body = await readBody(event);

  if (type === "forgot-password") {
    return await axiosPatchAuth("auth/forgot-password-request", body);
  } else if (type === "reset-password" && id) {
    return await axiosPatchAuth(`auth/reset-password/${id}`, body);
  } else if (type === "change-password") {
    return await axiosPostAuth(`auth/change-password`, body);
  }
  throw createError({ statusCode: 404, message: "Endpoint not found" });
});
