import { userParams } from "../protocols";
import userRepository from "../repositories/user-repository";
import bcrypt, { hash } from "bcrypt"
async function createUser(data: userParams) {
    const hash_password = await bcrypt.hash(data.password, 12)
    return userRepository.createUser({...data, password: hash_password});
}

const userServices = {
    createUser,
}

export default userServices;