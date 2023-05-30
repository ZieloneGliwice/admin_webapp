import { ApiAuthenticationResponse } from "@auth/types";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { accessToken }: { accessToken: string } = await request.json();

  const response = await fetch(
    `${process.env.AUTH_API_ORIGIN_URI}/.auth/refresh`,
    {
      headers: { "X-ZUMO-AUTH": accessToken },
    }
  );

  if (response.status !== 200) {
    return new NextResponse("Failed to refresh the token.", { status: 401 });
  }

  const responseJson: ApiAuthenticationResponse = await response.json();

  return new NextResponse(JSON.stringify(responseJson), { status: 200 });
};
