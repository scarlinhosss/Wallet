import { prisma } from "../config/index";
import { userParams } from "../protocols";

 function createUser(data: userParams) {
    return prisma.user.create({
        data,
    });
}

const userRepository = {
    createUser,
};

export default userRepository;