import { MoodIcon } from "../ui/icon";

export function Empty() {
  return (
    <div className="flex h-full flex-col items-center space-y-8">
      <div className="text-center">
        <p className="text-2xl font-semibold">No mood entries yet</p>
        <p className="text-muted">
          Start by adding a new mood entry to your moodboard
        </p>
      </div>
      <MoodIcon.sadnessMono className="h-24 w-24 text-muted/20" />
    </div>
  );
}
