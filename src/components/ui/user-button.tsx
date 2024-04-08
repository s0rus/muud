"use client";

import { useClerk } from "@clerk/nextjs";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback } from "./avatar";
import { Button } from "./button";
import { Icon } from "./icon";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Separator } from "./separator";

export function UserButton() {
  const { signOut, user } = useClerk();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function handleLogout() {
    try {
      setIsSigningOut(true);
      await signOut(() => router.push("/"));
    } catch (_error) {
      setIsSigningOut(false);
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="h-24 w-24 cursor-pointer">
          <AvatarImage src={user?.imageUrl} alt={`@${user?.fullName}`} />
          <AvatarFallback>
            {user?.firstName?.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-full">
          <div className="flex items-center gap-2">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user?.imageUrl} alt={`@${user?.fullName}`} />
              <AvatarFallback>
                {user?.firstName?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col leading-3">
              <span className="font-bold">
                {user?.fullName ?? "<unknown user>"}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                {user?.emailAddresses[0]?.emailAddress ?? "<unknown user>"}
              </span>
            </div>
          </div>
          <Separator className="my-2" />
          <Button
            variant="ghost"
            className="flex w-full justify-between"
            onClick={() => handleLogout()}
            disabled={isSigningOut}
            aria-disabled={isSigningOut}
          >
            {isSigningOut ? (
              <>
                <Icon.loading className="h-4 w-4 animate-spin" />
                <span className="flex-1">Signning out...</span>
              </>
            ) : (
              <>
                <Icon.signOut className="h-4 w-4" />
                <span className="flex-1">Sign out</span>
              </>
            )}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
