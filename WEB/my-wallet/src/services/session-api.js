import api from "./api";

export async function login(body) {
    const response = await api.post("/session", body);

    return response.data;
}

export async function signUp(body) {
    const response = await api.post("/user", body);

    return response.data;
}

export async function logout(body, token) {
    const response = await api.post("/session/logout", body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}