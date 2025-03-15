import { axiosPostAuth, axiosPatchAuth } from "~/server/utils/axiosAuthHelper";

export default defineEventHandler(async (event) => {
  const { type } = getQuery(event); // Extract type from query parameters
  const body = await readBody(event);

  if (type === "verify-account") {
    return await axiosPatchAuth("auth/verify-account", body);
  } else if (type === "resend-otp") {
    return await axiosPostAuth("auth/resend-otp", body);
  }

  throw createError({ statusCode: 404, message: "Endpoint not found" });
});
