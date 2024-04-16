import { MoodBoard } from "@/components/mood-board";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { getMoodEntries } from "@/server/queries";

export default async function Home() {
  const initialMoodEntries = await getMoodEntries({
    offset: 0,
    limit: 10,
  });

  return (
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
      <MoodBoard initialMoodEntries={initialMoodEntries} />
    </div>
  );
}
