import axios from "axios";
import { apiUrl } from "./Constants";


export const getAboutUsContent = () => axios.get(`${apiUrl}/about_us/`);

export const getPolicyContent = () => axios.get(`${apiUrl}/policy/`);

export const getUsageAgreementContent = () => axios.get(`${apiUrl}/usage_agreement/`);