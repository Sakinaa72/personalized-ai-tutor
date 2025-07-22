"use server";
import { signIn, signOut } from "@/auth/authSetup";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
