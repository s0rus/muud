import { Mood } from "@/components/mood";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { UserButton } from "@/components/ui/user-button";
import { UnauthorizedUser } from "@/components/unauthorized-user";
import { db } from "@/db/db";
import { moods } from "@/db/schema";
import { currentUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <UnauthorizedUser />;
  }

  const moodList = await db
    .select()
    .from(moods)
    .where(eq(moods.moodOwnerId, user.id))
    .orderBy(desc(moods.createdAt));

  return (
    <main className="container flex min-h-screen flex-col">
      <header className="flex w-full items-center justify-between py-12">
        <h2 className="text-3xl tracking-tighter">
          Welcome back,{" "}
          <span className="font-bold text-primary">{user.firstName}</span>!
        </h2>
        <UserButton />
      </header>
      <div className="grid h-full w-full flex-1 grid-cols-3 grid-rows-[auto_1fr] gap-x-16 gap-y-4 rounded-t-lg bg-muted/20 px-12 py-4">
        <nav className="col-span-full h-fit">
          <div className="flex items-center justify-between">
            <div></div>
            <div>
              <Button variant="ghost" size="icon">
                <Icon.history />
              </Button>
            </div>
          </div>
        </nav>
        <Mood moodList={moodList} />
      </div>
    </main>
  );
}
