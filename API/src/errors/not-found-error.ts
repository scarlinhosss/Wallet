import { ApplicationError } from "../protocols";

export function notFoundError(): ApplicationError {
    return {
        name: "NotFoundError",
        message: "No results for this search"
    }
    

}