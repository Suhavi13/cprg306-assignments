"use client";

import { useUserAuth } from "../week-9/contexts/AuthContext.js";
import Link from "next/link";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main>
      <h1>Welcome to the Shopping List App</h1>

      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <Link href="app\week-9\shopping-list\page.js">Go to Shopping List</Link>
          <br />
          <button onClick={handleSignOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleSignIn}>Log In with GitHub</button>
        </div>
      )}
    </main>
  );
}