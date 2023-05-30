import Image from "next/image";
import { GoogleSignInButton } from "./auth/components/GoogleSignInButton";

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex h-fit flex-col items-center">
        <Image
          className="mb-20"
          priority
          src="/img/header-logo.png"
          alt="Logo Zielone Gliwice"
          width={150}
          height={40}
        />
        <GoogleSignInButton />
      </div>
    </div>
  );
};

export default Home;
