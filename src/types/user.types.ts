export enum UserEnum {
  Customer = "Customer",
  Admin = "Admin",
  Restaurant = "Restaurant",
}

export type UserType = UserEnum.Admin | UserEnum.Customer | UserEnum.Restaurant;
