// Library
import axios from "axios";

// ========================== FETCH DATA V1 ======================

// Fetch Data - GET API Based
export function getData(url, params, token) {
  return axios.get(`${url}`, { params, headers: { Authorization: `Bearer ${token}` } });
}

// Fetch Data- POST API Based
export async function postData(url, payload, token) {
  return await axios.post(`${url}`, payload, { headers: { Authorization: `Bearer ${token}` } });
}

// ========================== FETCH DATA V2 ======================

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
export async function getDetailGame(id, token) {
  // API Settings
  const URL_API = `player/game/${id}`;

  const reqServer = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`, { headers: { Authorization: `Bearer ${token}` } }),
    res = reqServer.data;

  return res.data;
}

// Fetch Data - POST Sign In
export async function postSignIn(form, payload, token) {
  // API Settings
  const URL_API = "player/signin";

  const reqServer = await axios.post(`${ROOT_API}/${API_VERSION}/${URL_API}`, form, payload, { headers: { Authorization: `Bearer ${token}` } }),
    res = reqServer.data;

  return res.data;
}
