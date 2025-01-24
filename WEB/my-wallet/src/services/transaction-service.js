import api from "./api";

export async function getTransactions(userId, token) {
    const response = await api.get(`/transaction/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export async function getTransactionById(id, token) {
    const response = await api.get(`/transaction/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}

export async function postTransactions(body, token) {
    const response = await api.post("/transaction", body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}

export async function deleteTransaction(id, token) {
    const response = await api.delete(`/transaction/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
}