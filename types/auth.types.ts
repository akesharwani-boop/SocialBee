export interface User {
  id: string;
  name: string;
  email: string;
  role: "user";
}

export interface AuthState {
  user: User | null;   // ye meri authentication state kaise hogi context api me 
  token: string | null;
  isAuthenticated: boolean;
}
// backend se baad me match karungi 