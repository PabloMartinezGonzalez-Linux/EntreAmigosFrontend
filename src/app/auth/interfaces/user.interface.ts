export interface User {
  id: number,
  name: string,
  password: string,
  role_id: number,
  address?: string,
  age?: number,
  gender?: string,
  phone_number?: string
}

export interface UpdateUser {
  name?: string | null,
  address?: string | null,
  age?: number | null,
  gender?: string | null,
  phone_number?: string | null
}
