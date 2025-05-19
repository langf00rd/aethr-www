"use client";

import useContentActions from "@/hooks/content-actions";
import { PostActionsTypes } from "@/lib/entities";
import { ArrowUp, MessageSquare, Share } from "lucide-react";
import { Button } from "./ui/button";

export function PostActions(props: { type: PostActionsTypes }) {
  const { upVote, comment, share } = useContentActions();

  return (
    <div className="flex items-center gap-5 text-[14px] font-mono">
      <Button
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          upVote();
        }}
        variant="ghost"
        className="bg-neutral-100 rounded-full px-[10px] py-[2px]"
      >
        <ArrowUp size={14} /> {100}
      </Button>
      <Button
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          comment();
        }}
        variant="ghost"
        className="bg-neutral-100 rounded-full px-[10px] py-[2px]"
      >
        <MessageSquare size={14} /> {100}
      </Button>
      {props.type === "post" && (
        <Button
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            share();
          }}
          variant="ghost"
          className="bg-neutral-100 rounded-full px-[10px] py-[2px]"
        >
          <Share size={14} /> share
        </Button>
      )}
    </div>
  );
}
