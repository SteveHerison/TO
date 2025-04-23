import { logoutUser } from "@/services/userService";
import { Button } from "../ui/button";
import { MdExitToApp } from "react-icons/md";

const LogoutButton = () => {
  return (
    <Button
      variant="ghost"
      className="w-full gap-2 justify-start hover:bg-black/10"
      onClick={logoutUser}
    >
      <MdExitToApp />
      Sair
    </Button>
  );
};

export default LogoutButton;
