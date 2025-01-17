import api from "./api";

export async function getTransactions(userId, token) {
    const response = await api.get(`/transaction/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}