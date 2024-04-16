import { UserButton } from "@/components/ui/user-button";
import { currentUser } from "@clerk/nextjs/server";

export async function Header() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <header className="flex w-full items-center justify-between py-12">
      <h2 className="text-3xl tracking-tighter">
        Welcome back,{" "}
        <span className="font-bold text-primary">{user.firstName}</span>!
      </h2>
      <UserButton />
    </header>
  );
}
