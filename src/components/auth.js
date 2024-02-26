import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState(null);
  //const linkedinProvider = new auth.LinkedInAuthProvider();
  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken();
      setUserToken(token);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();
      setUserToken(token);
    } catch (err) {
      console.error(err);
    }
  };

  // const signInWithLinkedIn = () => {
  //   auth.signInWithPopup(linkedinProvider)
  //     .then((result) => {
  //       // This gives you a LinkedIn Access Token.
  //       const token = result.credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log(token, user);
  //       setUserToken(token);
  //     })
  //     .catch((error) => {
  //       // Handle errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  const logout = async () => {
    try {
      await signOut(auth);
      setUserToken(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {userToken ? (
        <p>Token: {userToken}</p>
      ) : (
        <div>
          <input
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}> Sign In</button>

          <button onClick={signInWithGoogle}> Sign In With Google</button>
          {/* <button onClick={signInWithLinkedIn}> Sign In With LinkedIn</button> */}
        </div>
      )}

      <button onClick={logout}> Logout </button>
    </div>
  );
};