/** @format */

export const optionsExecirse = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const optionsdetail = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};
export const optionsYoutube = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
