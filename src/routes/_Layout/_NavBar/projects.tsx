import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/components/NavBar/Projects";

export const Route = createFileRoute("/_Layout/_NavBar/projects")({
    component: Projects,
})