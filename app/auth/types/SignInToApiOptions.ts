export type SignInToApiOptions =
  | {
      providerType: "google";
      idToken: string;
      authorizationCode: string;
      accessToken?: never;
    }
  | {
      providerType: "facebook";
      idToken?: never;
      authorizationCode?: never;
      accessToken: string;
    };
