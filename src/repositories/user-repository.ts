import { prisma } from "../config/index";
import { userParams } from "../protocols";

 function createUser(data: userParams) {
    return prisma.user.create({
        data,
    });
}

 function findUseryByEmail(email: string) {
    return prisma.user.findFirst({
        where: {
            email,
        },
    });
 }

const userRepository = {
    createUser,
    findUseryByEmail,
};

export default userRepository;