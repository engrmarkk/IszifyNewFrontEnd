import { axiosPostAuth } from "~/server/utils/axiosAuthHelper";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await axiosPostAuth("auth/login", body);
});
