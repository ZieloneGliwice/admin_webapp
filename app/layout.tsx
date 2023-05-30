import { AuthGateway } from "./auth/components/AuthGateway";
import { AuthProvider } from "./auth/components/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Zaloguj się | Zielone Gliwice",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl">
      <body className="bg-white">
        <AuthProvider>
          <AuthGateway>{children}</AuthGateway>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
