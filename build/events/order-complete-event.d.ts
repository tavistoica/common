import { Subjects } from "./subjects";
export interface OrderCompletedEvent {
  subject: Subjects.OrderCompleted;
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
