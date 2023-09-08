import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const token = localStorage.getItem("token");
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


export default {
  signIn: (payload: any) => {
    const method = "post";
    const url = baseURL + "/4f9b4222-c56b-46ca-8138-b30f8ae943ce";

    return axios({ method, url, data: payload });
  },

  getUersData: () => {
    const method = "get";
    const url = baseURL + "/a16899fe-ed95-4eb4-bd45-8a172b7193be";

    return axios({ method, url });
  },

  getUerDetail: (payload: string) => {
    const method = "get";
    const url = baseURL + "/1c6d3347-59a2-4939-b0f9-a7efce0bb84f/" + payload;

    return axios({ method, url });
  },
};
