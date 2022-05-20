import { Subjects } from "./subjects";
export interface OrderCompletedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        version: number;
        ticket: {
            id: string;
            stock: number;
        };
        itemAmount: number;
    };
}
