import { Subjects } from "./subjects";

export interface MealCreatedEvent {
  subject: Subjects.MealCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
    stock: number;
    imagePath: string;
  };
}
