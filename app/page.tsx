import Image from "next/image";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <SignedOut>
          <h1>Not signed in</h1>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <h1>Signed in</h1>
          <UserButton />
        </SignedIn>
      </div>
    </main>
  );
}
