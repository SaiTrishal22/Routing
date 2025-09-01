import { useNavigate } from "@tanstack/react-router";
import { Button } from "../ui/button";

function SideBarLayoutComponent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Button
        variant="secondary"
        className="justify-start"
        onClick={() => navigate({ to: "/compose" })}
      >
        ✉️ Compose
      </Button>

      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate({ to: "/draftmail" })}
      >
        📝 Draft
      </Button>

      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate({ to: "/snooze" })}
      >
        ⏰ Snooze
      </Button>

      <Button
        variant="ghost"
        className="justify-start"
        onClick={() => navigate({ to: "/sentmail" })}
      >
        📤 Sent
      </Button>
      
    </div>
  );
}

export default SideBarLayoutComponent;
