import axios from "axios";

// const instance = axios.create({
//     baseURL: "https://connections-api.herokuapp.com/"
// });
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setToken = (token) => {
    if (token) {
        return axios.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    axios.defaults.headers.common.authorization = "";
}

export const register = async (signupData) => {
    const response = await axios.post("/users/signup", signupData);
    console.log("signupData", response.data);
    axios.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    return response.data;
}

export const login = async (loginData) => {
    const { data } = await axios.post("/users/login", loginData);
    axios.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data;
}


export const logout = async () => {
    const { data } = await axios.post("/users/logout");
    return data;
}

export const getCurrentUser = async (token) => {
    try {
        setToken(token);
        const { data } = await axios.get("/users/current");
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
}

// export default instance;