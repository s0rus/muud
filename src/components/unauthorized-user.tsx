import { SignInButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export function UnauthorizedUser() {
  return (
    <main className="container min-h-screen">
      <div className="flex flex-col pt-24">
        <span className="text-6xl font-bold tracking-tighter text-primary">
          MUUD
        </span>
        <h1 className="text-3xl tracking-tight">
          Start tracking your <span className="font-bold">mood</span> and{" "}
          <span className="font-bold">thoughts</span> today!
        </h1>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </div>
    </main>
  );
}
