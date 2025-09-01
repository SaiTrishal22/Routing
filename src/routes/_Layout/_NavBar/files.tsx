import { createFileRoute } from "@tanstack/react-router";
import Files from "@/components/NavBar/Files";

export const Route = createFileRoute("/_Layout/_NavBar/files")({
    component: Files,
})