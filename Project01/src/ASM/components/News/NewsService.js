import AxiosInstance from "../helpers/AxiosHelper";

export const getNews = async () => {
    const response = await AxiosInstance().get('/articles');
    return response.data;
}
export const getItemNewsuser = async () => {

    const response = await AxiosInstance().get(`/articles/my-articles`);
    return response.data;
}
export const getNewsDetail = async (id) => {

    const response = await AxiosInstance().get(`/articles/${id}/detail`);
    return response.data;

}