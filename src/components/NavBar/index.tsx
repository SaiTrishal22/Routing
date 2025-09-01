import { useUser } from "../StoreUserDetails";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";

function NavBarLayoutComponent() {
  const navigate = useNavigate();
  
  

  return (
    <nav className="flex items-center gap-3">
      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/dashboard"})}
      >
        Dashboard
      </Button>
      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/projects"})}
      >
        Projects
      </Button>

      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/files"})}
      >
        Files
      </Button>

      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/tags"})}
      >
        Tags
      </Button>

      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/categories"})}
      >
        Categories
      </Button>

      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/users"})}
      >
        Users
      </Button>
      {/* <div>
        <Button onClick={() => {

        }}>
          <div>
            <img src={user?.image}
          </div>
        </Button>
      </div> */}
     
    </nav>
  );
}

export default NavBarLayoutComponent;
