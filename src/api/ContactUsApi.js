import axios from "axios";
import { apiUrl } from "./Constants";

// contact us
export const contactUs = (contactUsInfo) =>
  axios.post(apiUrl + "/contact/", contactUsInfo);