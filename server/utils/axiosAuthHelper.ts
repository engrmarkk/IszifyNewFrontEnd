import axios from "axios";
import { session } from "@/utils";
import { useRuntimeConfig } from "#imports";
const config = useRuntimeConfig();

export const axiosPostAuth = async (point: string, data: any) => {
  try {
    const result = await axios.post(config.public.apiBaseUrl + point, data);

    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (!error.response) {
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status === 401) {
        session.logout();
      }
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};

export const axiosGetAuth = async (point: string) => {
  const sessiondata = session.get("sessionData");

  try {
    const result = await axios.get(config.public.apiBaseUrl + point, data);

    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (!error.response) {
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status === 401) {
        session.logout();
      }
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};

export const axiosPatchAuth = async (point: string, data: any) => {
  try {
    const result = await axios.patch(config.public.apiBaseUrl + point, data);

    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (!error.response) {
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status === 401) {
        session.logout();
      }
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};

export const axiosPost = async (point: string, data: any, token?: string) => {
  try {
    const result = await axios.post(config.public.apiBaseUrl + point, data, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (error.response == undefined) {
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status == 401) session.logout();
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};

export const axiosPatch = async (point: string, data: any) => {
  const sessiondata = session.get("sessionData");

  let options: any;
  if (sessiondata) {
    options = {
      headers: {
        Authorization: `Bearer ${sessiondata["access_token"]}`,
      },
    };
  }

  if (point.includes("/user")) options = null;

  try {
    const result = await axios.post(
      config.public.apiBaseUrl + point,
      data,
      options
    );
    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (error.response == undefined) {
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status == 401) session.logout();
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};

export const axiosDelete = async (point: string, data: any) => {
  const sessiondata = session.get("sessionData");

  let options: any;
  if (sessiondata) {
    options = {
      headers: {
        Authorization: `Bearer ${sessiondata["access_token"]}`,
      },
    };
  }

  if (point.includes("/user")) options = null;

  try {
    const result = await axios.delete(
      config.public.apiBaseUrl + point,
      options
    );
    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (error.response == undefined) {
      // session.logout()
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status == 401) session.logout();
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};

export const axiosGet = async (point: string) => {
  const sessiondata = session.get("sessionData");

  try {
    const result = await axios.get(config.public.apiBaseUrl + point, {
      headers: {
        Authorization: `Bearer ${sessiondata?.access_token}`,
      },
    });

    return { status: result.status, error: null, data: result.data };
  } catch (error: any) {
    if (!error.response) {
      return {
        status: 0,
        error: { message: error.message },
        data: null,
      };
    } else {
      if (error.response.status === 401) {
        session.logout();
      }
      return {
        status: error.response.status,
        error: error.response.data,
        data: null,
      };
    }
  }
};
