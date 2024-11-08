import { prisma } from "../config";
import { SessionParams } from "../protocols";
import { NOT_FOUND } from "http-status";
import sessionRepository from "../repositories/session-repository"

async function upsertSession(data: SessionParams, sessionId: number) {
    return sessionRepository.upsertSession(data, sessionId)
}

const sessionServices = {
    upsertSession,
}

export default sessionServices;