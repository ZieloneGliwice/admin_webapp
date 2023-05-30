import { accessTokenStorageName } from "@common/constants";

export const storeAccessToken = (accessToken: string) =>
  localStorage.setItem(accessTokenStorageName, accessToken);
