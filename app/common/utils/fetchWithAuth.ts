import { ApiAuthenticationResponse } from "@auth/types";
import { getStoredAccessToken } from "./getStoredAccessToken";
import { storeAccessToken } from "./storeAccessToken";

export const fetchWithAuthAsync = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  const accessToken = getStoredAccessToken() ?? "";

  const firstResponse = await fetch(input, {
    ...init,
    headers: { ...(init?.headers ?? {}), "X-ZUMO-AUTH": accessToken },
  });

  if (firstResponse.status !== 401) {
    return firstResponse;
  }

  const refreshResponse = await fetch(
    `${window.location.origin}/auth/refresh-token`,
    {
      method: "POST",
      body: JSON.stringify({ accessToken }),
    }
  );

  if (refreshResponse.status !== 200) {
    return firstResponse;
  }

  const {
    authenticationToken: freshApiAccessToken,
  }: ApiAuthenticationResponse = await refreshResponse.json();
  storeAccessToken(freshApiAccessToken);

  return await fetch(input, {
    ...init,
    headers: { ...(init?.headers ?? {}), "X-ZUMO-AUTH": accessToken },
  });
};
