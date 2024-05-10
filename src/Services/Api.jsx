import axios from "axios";
import { Base_url } from "./Base_url";

export const ApiCall = async (
  method,
  endPoint,
  data,
  params,
  token
) => {
  try {
      const userToken = localStorage.getItem("User");

      const headers = {
          "Authorization": `Bearer ${userToken}`
      };

      if (data instanceof FormData) {
          // If data is FormData, append headers for file uploads
          headers["Content-Type"] = "multipart/form-data";
      }

      const res = await axios({
          method: method,
          url: `${Base_url}${endPoint}`,
          data: data,
          params: params,
          headers: headers
      });

      return {
          status: res?.status,
          data: res.data,
          message: res.data?.msg || ""
      };

  } catch (error) {
      console.log("Error:", error);
      return error;
  }
};

