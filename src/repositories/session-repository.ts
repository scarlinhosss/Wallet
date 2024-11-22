import { prisma } from "../config";
import { SessionParams} from "../protocols";

async function upsertSession(data: SessionParams) {
    await prisma.session.upsert({
        where: {
            id: data.id,
        },
        create: {
            id: data.id,
            userId: data.userId!,
            token: data.token!,
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