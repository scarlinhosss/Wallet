import { prisma } from "../config/index";
import { userParams } from "../protocols";

 function createUser(data: userParams) {
    return prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            //hash_password: data.password,
        },
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