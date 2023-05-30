import { createContext } from "react";

interface AuthContextValues {
  accessToken?: string;
  setAccessToken: (accessToken: string) => void;
}

export const AuthContext = createContext<AuthContextValues>({
  setAccessToken: () => {},
});
