export interface ApiAuthenticationResponse {
  authenticationToken: string;
  user: {
    userId: string;
  };
}
