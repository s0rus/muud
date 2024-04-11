import { createMoodEntry } from "@/app/actions/mood";
import { CreateMoodSchema, type SelectMood } from "@/db/schema";
import { useAuth } from "@clerk/nextjs";
import { useId, useState, useTransition } from "react";
import { toast } from "sonner";
import { MoodButtons } from "./mood-buttons";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { Textarea } from "./ui/textarea";
import { ToggleGroup } from "./ui/toggle-group";

type MoodFormProps = {
  addOptimisticMood: (mood: SelectMood) => void;
};

export function MoodForm({ addOptimisticMood }: MoodFormProps) {
  const id = useId();
  const { userId } = useAuth();
  const [currentMood, setCurrentMood] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  function action(data: FormData) {
    const formData = Object.fromEntries(data);
    const parsed = CreateMoodSchema.safeParse(formData);

    if (!parsed.success || !userId) {
      toast.error("Whoops! Failed to create mood entry due to invalid data.");
      return;
    }

    addOptimisticMood({
      id,
      mood: parsed.data.mood,
      description: parsed.data.description ?? "",
      moodOwnerId: userId,
      createdAt: new Date(),
    });

    startTransition(async () => {
      const { message } = await createMoodEntry(parsed.data);
      toast.success(message);
    });
  }

  return (
    <form action={action}>
      <ToggleGroup
        type="single"
        className="justify-start"
        onValueChange={(v) => setCurrentMood(v)}
      >
        <MoodButtons />
      </ToggleGroup>
      <input type="hidden" name="mood" defaultValue={currentMood} />
      <Textarea
        name="description"
        placeholder="Let it all out!"
        className="resize-none"
      />
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Icon.loading className="animate-spin" />
            <span>Adding mood...</span>
          </>
        ) : (
          <span>Add mood</span>
        )}
      </Button>
    </form>
  );
}
