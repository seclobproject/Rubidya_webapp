import axios from "axios";
import { Base_url } from "./Base_url";

export const ApiCall = async (
  method,
  endPoint,
  data,
  params,
  content_type,
  token
) => {

  try {
    let token = localStorage.getItem("User");

    const res = await axios({
      method: method,
      url: `${Base_url}${endPoint}`,
      data: data,
      params: params,
      headers: {
        "Content-Type": content_type ?? "application/json",
        Authorization: `Bearer ${token}`,
      },

    });
    console.log(res,"res,res.......")

    return {
      status: res?.status,
      data: res.data,
      message: res.data?.msg || "",
    };

  } catch (error) {
    console.log("here", error)
    // Show_Toast(error.response ? error.response.data.message : 'Internal Server Error',false)
    return error;
  }


}

