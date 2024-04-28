import { MoodForm } from "@/components/board/mood-form";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { MoodBoard } from "./mood-board";

export function Dashboard() {
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
      <div className="col-span-1">
        <MoodForm />
      </div>
      <div className="col-span-2">
        <MoodBoard />
      </div>
    </div>
  );
}
