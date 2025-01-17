import { prisma } from "../config";
import { SessionParams} from "../protocols";

async function upsertSession(data: SessionParams, userId: number) {
    return prisma.session.upsert({
        where: {
            id: data.id,
        },
        create: {
            userId: userId,
            token: data.token,
        },
        update: {
            closedAt: new Date(),
        },
    });
}

const sessionRepository = {
    upsertSession,
}

export default sessionRepository;