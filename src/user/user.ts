export class User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  data: User;
  message: string;
  status: string;
}