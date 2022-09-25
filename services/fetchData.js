// Library
import axios from "axios";

// =============== API SERVICES - SIGN IN & SIGN UP ===============

// Fetch Data- POST API Based
export async function postData(url, payload, token) {
  return await axios.post(`${url}`, payload, { headers: { Authorization: `Bearer ${token}` } });
}

// ============ API SERVICES - FEATURES & DETAIL GAME =============

// Global Variables
const ROOT_API = process.env.NEXT_PUBLIC_API_PRO,
  API_VERSION = "api/v1-player";

// Features Game
export async function getFeaturesGame() {
  // API Settings
  const URL_API = "player/landing";

  const reqServer = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`),
    res = reqServer.data;

  return res.data;
}

// Detail Game
export async function getDetailGame(id, token) {
  // API Settings
  const URL_API = `player/game/${id}`;

  const reqServer = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_API}`, { headers: { Authorization: `Bearer ${token}` } }),
    res = reqServer.data;

  return res.data;
}

// =========== API SERVICES -
// POST Sign In
// export async function postSignIn(form, token) {
//   // API Settings
//   const URL_API = "player/signin";

//   const reqServer = await axios.post(`${ROOT_API}/${API_VERSION}/${URL_API}`, form, { headers: { Authorization: `Bearer ${token}` } }),
//     res = reqServer.data;

//   return res.data;
// }

// Fetch Data - GET API Based
// export function getData(url, params, token) {
//   return axios.get(`${url}`, { params, headers: { Authorization: `Bearer ${token}` } });
// }
