export const metadata = {
  title: "Panel administratora | Zielone Gliwice",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="f bg-lime-500 px-8 py-4">
        Panel administratora - Zielone Gliwice
      </header>
      {children}
    </>
  );
};

export default DashboardLayout;
