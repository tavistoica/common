import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    meal: {
      id: string;
      price: number;
      stock: number;
      imagePath: string;
    };
    itemAmount: number;
  };
}
