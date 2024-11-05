import { User, Transaction, Session} from "@prisma/client";

export type LoginParams = {
    email: string,
    password: string,
};

export type SignUpParams = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
};

export type SignInResult = {
    user: Pick<User, "email" | "name" | "id">,
    token: string,
};

export type NewSessionParams = Pick<Session, "userId" | "token">;                                                                                                     