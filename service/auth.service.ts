import api from "@/lib/axios";
export interface SignupPayload {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
}

export const signupUser = async (data: SignupPayload) => {
  const response = await api.post("/users", data);
  return response.data;
};
// ab login logic aisa ki payload me hum kya bhej rahe response me kya araha aisa set karna hai

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  refresh_token: string;
  access_token: string;
}

export const loginUser = async (data: LoginPayload) => {
  const response = await api.post("/users/login", data);
  return response.data as LoginResponse;
};
