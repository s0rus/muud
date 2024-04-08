import { UserButton } from "@/components/ui/user-button";
import { UnauthorizedUser } from "@/components/unauthorized-user";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <UnauthorizedUser />;
  }

  return (
    <main className="container min-h-screen">
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <UserButton />
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-[48px_48px_48px_48px] gap-4">
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
            <div className="h-12 w-12 rounded-lg bg-primary"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
