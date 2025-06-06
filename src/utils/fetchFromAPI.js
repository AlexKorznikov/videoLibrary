 import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (err) {
    console.error(err);
  }
}