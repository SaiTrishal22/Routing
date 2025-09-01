import { createFileRoute, Outlet } from "@tanstack/react-router";
import NavBarLayoutComponent from "@/components/NavBar";
import SideBarLayoutComponent from "@/components/SideBar";

export const Route = createFileRoute("/_Layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* Top NavBar */}
      <header className="h-14 border-b bg-background px-4 shadow-sm flex items-center">
        <NavBarLayoutComponent />
      </header>

      {/* Body: sidebar + main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-sidebar p-4">
          <SideBarLayoutComponent />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
