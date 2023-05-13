import axios from "axios";
import { logger } from "./loggerService";
import { toast } from "react-toastify";

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            logger.log(error);
            toast.error("Проблемы в работе сервера. Попробуйте позже");
        }

        return Promise.reject(error);
    }
);

export const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
