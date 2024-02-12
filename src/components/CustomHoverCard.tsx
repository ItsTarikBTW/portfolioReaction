import React from "react";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

interface CustomHoverCardProps {
  key: number | string;
  platform: string;
  data: {
    handler: string;
    description: string;
    name: string;
    url: string;
    d: string;
  };
}

export const CustomHoverCard: React.FC<CustomHoverCardProps> = ({
  key,
  platform,
  data,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="/">
          <svg
            className="h-5 w-5"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{platform}</title>
            <path fill="currentColor" d={data.d}></path>
          </svg>
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
