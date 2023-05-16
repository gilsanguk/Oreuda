import axios from "axios";

export const GetLoadReadme = (ACCESS_TOKEN: any) => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/readme`, {
    headers: {
      Authorization: ACCESS_TOKEN,
    },
  });
};
