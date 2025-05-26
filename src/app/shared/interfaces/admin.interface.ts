import { User } from "../../auth/interfaces/user.interface";

export interface LoadAllUsers {
  result: User[]
}

export interface DeleteUser {
  message: string
}
