"use client";

import { ReactNode, useState } from "react";
import { AuthContext } from "@auth/context";
import { getStoredAccessToken } from "@/app/common/utils";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState(getStoredAccessToken());

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
