"use client";
import { logoutUser } from "@/actions/auth.action";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const logOutRes = await logoutUser();
      if (logOutRes.success !== true) {
        throw new Error("Logout failed");
      }
      router.push("/login");
    } catch (error) {
      console.log("Logout error=> ", error);
    }
  };
  return (
    <Button variant="outline" onClick={handleLogout}>
      Logout
    </Button>
  );
}
