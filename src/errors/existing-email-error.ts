import { ApplicationError } from "../protocols";

export function existingEmail(): ApplicationError {
    return {
        name: "existingEmail",
        message: "This email is already in use"
    }
}