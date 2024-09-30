import MainNavbar from "../../components/ui/main/MainNavbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <MainNavbar />
      <main className="container mx-auto max-w-7xl sm:pt-16 pt-[200px] px-6 flex-grow">
        {children}
      </main>
    </div>
  );
}
