import DashboardBottomBar from "@/components/ui/dashboard/DashboardBottomBar";
import DashboardSideBar from "@/components/ui/dashboard/DashboardSideBar";
import MainNavbar from "@/components/ui/main/MainNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="md:hidden">
        <MainNavbar />
      </div>
      <div className="relative flex">
        <div className="max-md:hidden">
          <DashboardSideBar />
        </div>
        <main className="container flex-grow lg:ml-[220px] md:ml-[100px] mx-6 mt-5">
          {children}
        </main>
        <DashboardBottomBar />
      </div>
    </div>
  );
}
