import { EntryType } from "@prisma/client"

export type transactionParams = { 
    id: number,
    description: string,
    value: number,
    type: EntryType,
    userId: number,
}

export type transactionResponse = { 
    id: number,
    description: string,
    value: string,
    type: EntryType,
    userId: number,
}
