"use client";
import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";

function SignInButton() {
  const [open, setOpen] = useRecoilState(modalState);
  const { data: session } = useSession();

  const modal = () => {
    setOpen(true);
  };
  return (
    <div className={"flex items-center space-x-4"}>
      {session ? (
        <>
          <PlusCircleIcon
            className={
              "h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            }
            onClick={modal}
          />
          <img
            onClick={signOut}
            className={"h-10 rounded-full cursor-pointer"}
            src={session.user.image}
            alt={"user-image"}
          />
        </>
      ) : (
        <button onClick={signIn}> Sign in</button>
      )}
    </div>
  );
}

export default SignInButton;
