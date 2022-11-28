import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const uploadGif = async (data) => {
  const response = await api.post("/gifs", data);
  return response.data;
};

export const getAllGifs = async () => {
  const response = await api.get("/gifs");
  return response.data;
};
