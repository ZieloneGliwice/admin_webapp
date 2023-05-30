import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

export const GoogleSignInButton = () => {
  const redirectUri = encodeURIComponent(
    `${process.env.ORIGIN_URI}${"/auth/google-sign-in-callback"}`
  );
  const scope = encodeURIComponent(process.env.GOOGLE_SCOPE ?? "");

  return (
    <a
      className="flex px-4 py-2 font-semibold text-gray-500 shadow-sm shadow-gray-400"
      href={`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectUri}&prompt=consent&response_type=code id_token&nonce=${uuidv4()}&client_id=${
        process.env.GOOGLE_CLIENT_ID
      }&scope=${scope}&access_type=offline`}
    >
      <Image
        className="mr-2"
        src="/img/google-logo.png"
        alt="Google logo"
        width={24}
        height={24}
      />
      Kontynuuj z Google
    </a>
  );
};
