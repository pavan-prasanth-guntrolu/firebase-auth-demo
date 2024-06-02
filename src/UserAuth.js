import React, { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function UserAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  async function signIn(e) {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    await console.log(res);
    try {
    } catch (error) {
      console.log("Error is Signing In the user");
      console.log(error.message);
    }
  }

  async function signUp(e) {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await console.log(res);
    } catch (error) {
      console.log("Error is Signing up the user");
      console.log(error.message);
    }
  }

  async function logOut() {
    await signOut(auth);
  }

  return (
    <div>
      <center>
        <form autoComplete="off">
          <h1>Authentication {user?.email}</h1>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <button onClick={signIn}>Sign In</button> &nbsp; &nbsp;
          <button onClick={signUp}>Sign Up</button>&nbsp; &nbsp;
          <button onClick={logOut}>log out</button>
        </form>
      </center>
    </div>
  );
}

export default UserAuth;
