import { ApiAuthenticationResponse, SignInToApiOptions } from "@auth/types";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const options: SignInToApiOptions = await request.json();

  const body = JSON.stringify(
    options.providerType === "google"
      ? {
          id_token: options.idToken,
          authorization_code: options.authorizationCode,
          redirect_uri: `${process.env.ORIGIN_URI}/auth/google-sign-in-callback`,
        }
      : { access_token: options.accessToken }
  );

  const signInResponse = await fetch(
    `${process.env.AUTH_API_ORIGIN_URI}/.auth/login/${options.providerType}`,
    {
      method: "POST",
      body,
    }
  );

  if (signInResponse.status !== 200) {
    return new NextResponse("Failed to sign in to the API.", {
      status: signInResponse.status,
    });
  }

  const signInResponseJson: ApiAuthenticationResponse =
    await signInResponse.json();

  return new NextResponse(JSON.stringify(signInResponseJson), {
    status: 200,
  });
};
