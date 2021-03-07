import axios from "axios";
import { apiUrl } from "./Constants";

export const getAllHomeAds = () => axios.get(`${apiUrl}/home_advertisement/`);

export const getSharedAd = () => axios.get(`${apiUrl}/blog_advertisement/`);
