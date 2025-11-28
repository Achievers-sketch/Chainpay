import AppSidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardOverview from "@/components/dashboard/overview";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="p-4 lg:p-8 pt-6 lg:pt-8 bg-background">
          <DashboardOverview />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
