"use client";

import { CreateMoodSchema, DESCRIPTION_MAX_LENGTH } from "@/server/db/schema";
import { createMoodEntry } from "@/server/queries";
import { useAuth } from "@clerk/nextjs";
import { useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Icon } from "../ui/icon";
import { Label } from "../ui/label";
import { LimitCircle } from "../ui/limit-circle";
import { Textarea } from "../ui/textarea";
import { ToggleGroup } from "../ui/toggle-group";
import { MoodButtons } from "./mood-buttons";

export function MoodForm() {
  const { userId } = useAuth();
  const formRef = useRef<HTMLFormElement>(null);
  const [currentMood, setCurrentMood] = useState<string | undefined>(undefined);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{
    mood?: string[] | undefined;
    description?: string[] | undefined;
  } | null>(null);

  function action(data: FormData) {
    if (!userId) {
      toast.error("You must be logged in to add a mood entry.");
      return;
    }

    const formData = Object.fromEntries(data);
    const parsed = CreateMoodSchema.safeParse(formData);

    if (!parsed.success) {
      const err = parsed.error.flatten().fieldErrors;
      setErrors(err);
      return;
    }

    setErrors(null);
    startTransition(async () => {
      const response = await createMoodEntry(parsed.data);
      if (!response?.errors) {
        toast.success(response?.message);
        formRef.current?.reset();
        setDescriptionLength(0);
      }
    });
  }

  return (
    <form action={action} ref={formRef}>
      <div className="space-y-4">
        <div className="min-h-7">
          <Label htmlFor="mood">How do you feel?</Label>
          <ToggleGroup
            type="single"
            className="justify-start"
            onValueChange={(v) => setCurrentMood(v)}
            aria-describedby="mood-error"
          >
            <MoodButtons />
          </ToggleGroup>
          <div id="mood-error" aria-live="polite">
            {errors?.mood?.map((error: string) => (
              <p className="text-sm font-semibold text-destructive" key={error}>
                {error}
              </p>
            ))}
          </div>
          <input type="hidden" name="mood" defaultValue={currentMood} />
        </div>
        <div className="space-y-2">
          <div className="flex min-h-7 items-end justify-between">
            <Label htmlFor="description">What&apos;s on your mind?</Label>
            <LimitCircle
              value={descriptionLength}
              maxValue={DESCRIPTION_MAX_LENGTH}
            />
          </div>
          <Textarea
            name="description"
            placeholder="Let it all out!"
            className="h-48 resize-none"
            aria-describedby="description-error"
            onChange={(e) => setDescriptionLength(e.target.value.length)}
            maxLength={DESCRIPTION_MAX_LENGTH}
          />
          <p className="text-xs text-muted-foreground">
            Sharing your thoughts is optional.
          </p>
          <div id="description-error" aria-live="polite">
            {errors?.description?.map((error: string) => (
              <p className="text-sm font-semibold text-destructive" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>
        <div>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
            variant="secondary"
          >
            {isPending ? (
              <>
                <Icon.loading className="animate-spin" />
                <span>Adding mood...</span>
              </>
            ) : (
              <span>Add mood entry</span>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
