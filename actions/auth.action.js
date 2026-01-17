"use server";

import { cookies } from "next/headers";

const user = {
  name: "UserX",
  email: "userx@com-nex.com",
  password: "UserX@1234",
};

export const authenticateUser = async (email, password) => {
  try {
    const cookieStore = await cookies();
    if (email === user.email && password === user.password) {
      cookieStore.set("auth-email", email);
      cookieStore.set("logged-in", "true");
      return { success: true };
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.log("Authentication error=> ", error);
    throw new Error("Authentication failed");
  }
};

export const logoutUser = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("auth-email");
    cookieStore.delete("logged-in");
    return { success: true };
  } catch (error) {
    console.log("Logout error=> ", error);
    throw new Error("Logout failed");
  }
};

export const isUserAuthenticated = async () => {
  try {
    const cookieStore = await cookies();
    const loggedIn = cookieStore.get("logged-in");
    return loggedIn?.value === "true";
  } catch (error) {
    console.log("Authentication check error=> ", error);
    return false;
  }
};
