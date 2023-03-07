import { v4 as uuidv4 } from "uuid";

export interface Item {
    id: string;
    title: string;
    createdAt: Date;
    deletedAt?: Date;
}

export function generateFakeData(): Item {
    return {
        id: uuidv4(),
        title: "new task",
        createdAt: new Date(),
    };
}
