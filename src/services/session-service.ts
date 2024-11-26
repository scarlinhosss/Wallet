import { prisma } from "../config";
import { SessionParams } from "../protocols";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sessionRepository from "../repositories/session-repository"
import userRepository from "../repositories/user-repository";
import { invalidCredentialsError } from "../errors";
import { notFoundError } from "../errors/not-found-error";

async function upsertSession(data: SessionParams) {
    const user = await userRepository.findUseryByEmail(data.email);

    if(!user) throw notFoundError();

    await validatePasswordOrFail(data.password, user?.hash_password);
    
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "");

    await sessionRepository.upsertSession({ ...data, token }, user.id);
}

async function validatePasswordOrFail(password: string, hash_password: string) {
    const isPasswordValid = await bcrypt.compare(password, hash_password);
    if (!isPasswordValid) throw invalidCredentialsError();
}

const sessionServices = {
    upsertSession,
}

export default sessionServices;