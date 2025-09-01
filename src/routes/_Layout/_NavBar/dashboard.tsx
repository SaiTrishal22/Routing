import { createFileRoute, CreateFileRoute } from "@tanstack/react-router";
import DashBoard from "@/components/NavBar/DashBoard";

export const Route = createFileRoute("/_Layout/_NavBar/dashboard")({
    component: DashBoard,
})
