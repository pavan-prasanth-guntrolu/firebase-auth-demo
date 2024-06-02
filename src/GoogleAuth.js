import React, { useState } from "react";

import { auth, googleProvider } from "./config/firebase";

import { signInWithPopup } from "firebase/auth";

function GoogleAuth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  async function signInWithGoogle() {
    const googleRes = await signInWithPopup(auth, googleProvider);
    await setName(googleRes.user.displayName);
    await setEmail(googleRes.user.email);
    await setImg(googleRes.user.photoURL);
  }
  return (
    <center>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <img src={img} />
    </center>
  );
}

export default GoogleAuth;
