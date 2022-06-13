import axios from "axios";
import https from "https";
import { server } from './index'
export default axios.create({
    baseURL: `${server}/api`,
    headers: {
        "Content-type": "application/json"
    },
    httpsAgent : new https.Agent({  rejectUnauthorized: false,}),
});