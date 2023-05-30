"use client";

import { ReactNode, useContext, useEffect, useMemo } from "react";
import { AuthContext } from "@auth/context";
import jwtDecode from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";

const anonymousPathnames = ["/", "/auth/google-sign-in-callback"];

interface Props {
  children: ReactNode;
}

export const AuthGateway = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { accessToken } = useContext(AuthContext);

  const isTokenValid = useMemo(
    () =>
      accessToken &&
      jwtDecode<{ exp: number }>(accessToken).exp * 1000 > new Date().getTime(),
    [accessToken]
  );

  const isCorrectPageDisplayed =
    (isTokenValid && !anonymousPathnames.includes(pathname)) ||
    (!isTokenValid && anonymousPathnames.includes(pathname));

  useEffect(() => {
    if (!isTokenValid && !anonymousPathnames.includes(pathname)) {
      router.push("/");
    }

    if (isTokenValid && anonymousPathnames.includes(pathname)) {
      router.push("/dashboard");
    }
  }, [isTokenValid, pathname, router]);

  return <>{isCorrectPageDisplayed && children}</>;
};
