import { EntryType } from "@prisma/client"

export type TransactionParams = { 
    id: number,
    description: string,
    value: number,
    type: EntryType,
    userId: number,
}

export type TransactionResponse = { 
    id: number,
    description: string,
    value: number,
    type: EntryType,
    date: Date,
}
