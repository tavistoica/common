export enum UserEnum {
  Customer = "Customer",
  Admin = "Admin",
  Restaurant = "Restaurant",
}

export type User = UserEnum.Admin | UserEnum.Customer | UserEnum.Restaurant;
