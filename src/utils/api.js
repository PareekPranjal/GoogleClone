import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyC_Rkm93ZRCAJ5-Olc3zW-XTofXe6VJmks",
    cx: "c03cfbf9dd0b14ed9",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
