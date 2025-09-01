import { createFileRoute} from "@tanstack/react-router";
import Categories from "@/components/NavBar/Categories";

export const Route = createFileRoute("/_Layout/_NavBar/categories")({
    component: Categories,
})