import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useUser } from "../StoreUserDetails";

function NavBarLayoutComponent() {
  const { user } = useUser();
  const userId = user?.id ?? "";
  const navigate = useNavigate();

  return (
    <nav className="w-full py-4 bg-gray-50 shadow-md">
      <div className="flex justify-center gap-6">
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/dashboard" })}
        >
          Dashboard
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/projects" })}
        >
          Projects
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/files" })}
        >
          Files
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/tags" })}
        >
          Tags
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/categories" })}
        >
          Categories
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate({ to: "/users" })}
        >
          Users
        </Button>
        <Button
          onClick={() =>
            navigate({ to: "/$userId/users/profile", params: { userId } })
          }
        >
          Profile
        </Button>
      </div>
    </nav>
  );
}

export default NavBarLayoutComponent;
