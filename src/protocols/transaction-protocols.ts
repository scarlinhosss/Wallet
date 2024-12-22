import { EntryType } from "@prisma/client"

export type transactionParams = { 
    id: number,
    description: string,
    value: number,
    type: EntryType,
    userId: number,
}