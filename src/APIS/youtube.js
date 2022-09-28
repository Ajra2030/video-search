import axios from "axios";

const KEY = "AIzaSyBRPMSEjwZTe3o6HwDvG3FPgvx9zVxDPWc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
