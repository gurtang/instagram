"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Button from "@/components/Button";

function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  return (
    <Button
      className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
      onClick={() => signIn("google", { callbackUrl: "/" })}
    >
      Sign in with Instagram
    </Button>
  );
}

export default GoogleSignInButton;
