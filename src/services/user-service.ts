import { userParams } from "../protocols";
import userRepository from "../repositories/user-repository";

async function createUser(data: userParams) {
    const user = await userRepository.createUser(data);
}

const userServices = {
    createUser,
}

export default userServices;