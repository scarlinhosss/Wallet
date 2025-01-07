import { userParams } from "../protocols";
import userRepository from "../repositories/user-repository";
import bcrypt, { hash } from "bcrypt"
import { existingEmail } from "../errors";

async function createUser(data: userParams) {
    const hash_password = await bcrypt.hash(data.password, 12)
    await checkEmailExist(data.email)
    return userRepository.createUser({...data, password: hash_password});
}

async function checkEmailExist(email: string) {
    const user = await userRepository.findUseryByEmail(email);
    if (user) throw existingEmail();
}

const userServices = {
    createUser,
}

export default userServices;