import axios from "axios";

import errorHandler from "./errorHandler";

// Create Axios
const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_PRO });

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
