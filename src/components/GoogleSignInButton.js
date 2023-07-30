"use client";

import { useSearchParams } from "next/navigation";
// import { signIn } from "next-auth/react";
import Button from "@/components/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const router = useRouter();

  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      const user = auth.currentUser.providerData[0];
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          userImg: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
          username: user.displayName.split(" ").join("").toLocaleLowerCase(),
        });
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button
      className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
      onClick={() => onGoogleClick("google", { callbackUrl: "/" })}
    >
      Sign in with Instagram
    </Button>
  );
}

export default GoogleSignInButton;
