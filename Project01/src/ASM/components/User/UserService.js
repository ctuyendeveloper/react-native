import AxiosInstance from "../helpers/AxiosHelper";

export const login = async (email, password) => {
    try {
        const body = {
            email: email,
            password: password
        }
        const res = await AxiosInstance().post('auth/login', body);
        console.log('Login response', res);
        return res;
    }
    catch (err) {
        console.log('Login error: ', err);
        return err;
    }
}
export const register = async (email, password) => {
    try {
        const body = {
            email: email,
            password: password
        }
        const res = await AxiosInstance().post('users/register', body);
        console.log('register response', res);
        return res;
    }
    catch (err) {
        console.log('register error: ', err);
        return err;
    }
}
// upload image
export const uploadImage = async (form) => {
    const response = await AxiosInstance('multipart/form-data')
        .post('/media/upload', form);
    return response.data;
}

// add news
export const addNews = async (data) => {
    const response = await AxiosInstance().post('/articles', data);
    return response.data;
}

