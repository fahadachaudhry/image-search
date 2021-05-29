import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ckV7URP80Uqn3i_fGAdLKAQCdFxytp02iXdnokM-R90",
  },
});
