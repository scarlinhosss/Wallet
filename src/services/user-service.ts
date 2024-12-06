import { userParams } from "../protocols";
import userRepository from "../repositories/user-repository";

async function createUser(data: userParams) {
    const hash_password = "";
    return userRepository.createUser({...data, password: hash_password});
}

const userServices = {
    createUser,
}

export default userServices;