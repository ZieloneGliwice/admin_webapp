"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@auth/context/AuthContext";
import { useRouter } from "next/navigation";
import { ApiAuthenticationResponse, SignInToApiOptions } from "@auth/types";
import { storeAccessToken } from "@common/utils";

const GoogleSignInCallbackPage = () => {
  const router = useRouter();

  const { setAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const executeAsync = async () => {
      const url = new URL(window.location.href.replace("#", "?"));
      const authorizationCode = url.searchParams.get("code");
      const idToken = url.searchParams.get("id_token");

      if (!authorizationCode || !idToken) {
        // TODO: redirect to some error page
      }

      const options: SignInToApiOptions = {
        providerType: "google",
        idToken: idToken!,
        authorizationCode: authorizationCode!,
      };
      const response = await fetch(`${window.location.origin}/auth/sign-in`, {
        method: "POST",
        body: JSON.stringify(options),
      });

      if (response.status !== 200) {
        // TODO: error handling
      }

      const { authenticationToken }: ApiAuthenticationResponse =
        await response.json();

      setAccessToken(authenticationToken);
      storeAccessToken(authenticationToken);

      router.push("/dashboard");
    };

    executeAsync();
  }, [router, setAccessToken]);

  return <div>{/* TODO: add some text with spinner */}</div>;
};

export default GoogleSignInCallbackPage;
