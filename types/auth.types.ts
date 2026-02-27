export interface User {
  id: string;
  firstName : string;
  lastName : string;
  email : string;
  age: number
  bio ?: string
  image ?: string
  // role: "user";
}

export interface AuthState {
  user: User | null;   // ye meri authentication state kaise hogi context api me 
  token: string | null;
  isAuthenticated: boolean;
}
// backend se baad me match karungi 