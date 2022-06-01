import { Subjects } from "./subjects";

export interface MealUpdatedEvent {
  subject: Subjects.MealUpdated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    stock: number;
    orderId?: string[];
    imagePath: string;
  };
}
