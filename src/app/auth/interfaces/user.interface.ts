export interface User {
  id: number,
  name: string,
  password: string,
  role_id: number,
  address?: string,
  age?: number,
  gender?: string,
  phoneNumber?: string
}

export interface UpdateUser {
  name: string,
  address?: string,
  age?: number,
  gender?: string,
  phoneNumber?: string
}
