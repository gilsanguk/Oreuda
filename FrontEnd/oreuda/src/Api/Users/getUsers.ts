import axios from "axios";

export const GetUser = async (ACCESS_TOKEN: any) => {
  console.log("getuseraccess", ACCESS_TOKEN);

  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`, {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });
};
