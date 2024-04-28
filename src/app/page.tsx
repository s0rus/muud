import { UnauthorizedUser } from "@/components/unauthorized-user";
import { currentUser } from "@clerk/nextjs/server";
import { Dashboard } from "./_components/dashboard/dashboard";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <UnauthorizedUser />;
  }

  return <Dashboard />;
}
