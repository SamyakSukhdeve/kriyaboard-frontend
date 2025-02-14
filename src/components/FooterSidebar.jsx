import useAuthStore from "@/store/useAuthStore";
import { Button } from "./ui/button";

const FooterSidebar = () => {
  const { logout } = useAuthStore();
  return (
    <div className="flex justify-start">
      <Button variant="destructive" className="p-2" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default FooterSidebar;
