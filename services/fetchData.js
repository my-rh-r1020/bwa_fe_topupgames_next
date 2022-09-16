// Library
import axios from "axios";

// Fetch Data - GET API Based
export function getData(url, params, token) {
  return axios.get(`${url}`, { params, headers: { Authorization: `Bearer ${token}` } });
}

// Global Variables
const ROOT_API = process.env.NEXT_PUBLIC_API_PRO,
  API_VERSION = "api/v1-player";

// Fetch Data - Features Game
export async function getFeaturesGame() {
  // API Settings
  const URL_API = "player/landing";

  const reqServer = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`),
    res = reqServer.data;

  return res.data;
}

// Fetch Data - Detail Game
export async function getDetailGame(id) {
  // API Settings
  const URL_API = `player/game/${id}`;

  const reqServer = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`),
    res = reqServer.data;

  return res.data;
}
