import { accessTokenStorageName } from "@common/constants";

export const getStoredAccessToken = () =>
  localStorage.getItem(accessTokenStorageName) ?? undefined;
