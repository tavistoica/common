import { Subjects } from "./subjects";
export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    version: number;
    meal: {
      id: string;
      stock: number;
      imagePath: string;
    };
    itemAmount: number;
  };
}
