import { auth, provider } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect,useState } from "react";

export const useSignIn = () => {
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setCurrentUser(user);
      })
      .catch((error) => {
        if (error) {
          setError(error);
        }
      });
  }, []);

  return {currentUser,error};
};
