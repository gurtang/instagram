"use client";
import React, { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { modalState } from "../../atom/modalAtom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { userState } from "../../atom/userAtom";
import { useRouter } from "next/navigation";

function SignInButton() {
  const [open, setOpen] = useRecoilState(modalState);
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(
            db,
            "users",
            user.auth.currentUser.providerData[0].uid
          );
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
            console.log(currentUser);
          }
        };
        fetchUser();
      }
    });
  }, []);

  function onSignOut() {
    signOut(auth);
    setCurrentUser(null);
  }

  const modal = () => {
    setOpen(true);
  };
  return (
    <div className={"flex items-center space-x-4"}>
      {currentUser ? (
        <>
          <PlusCircleIcon
            className={
              "h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
            }
            onClick={modal}
          />
          <img
            onClick={onSignOut}
            className={"h-10 rounded-full cursor-pointer"}
            src={currentUser?.userImg}
            alt={"user-image"}
          />
        </>
      ) : (
        <button onClick={() => router.push("/auth/signin")}> Sign in</button>
      )}
    </div>
  );
}

export default SignInButton;
