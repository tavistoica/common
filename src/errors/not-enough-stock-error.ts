import { CustomError } from "./custom-error";

export class NotEnoughStock extends CustomError {
  statusCode = 400;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, NotEnoughStock.prototype);
  }

  serializeErrors() {
    return [
      { message: "Not enough stock for this item! Try a smaller amount." },
    ];
  }
}
