import { LeftSideColumn } from "@/app/page";
import BackButton from "@/components/back-button";
import Comment from "@/components/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  generateRandomSentence,
  generateRandomWord,
  getInitials,
  getRandomIntBetween,
  getTodayDate,
} from "@/lib/utils";
import { ArrowUp, MessageSquare } from "lucide-react";

const opName = generateRandomWord();

export default function TopicPage() {
  return (
    <>
      <section className="flex">
        <LeftSideColumn />
        <div className="flex-1 border-l">
          <section className="space-y-5 p-5 border-b md:sticky md:top-0 md:max-h-[40vh] z-10 bg-white">
            <BackButton />
            <h1 className="text-xl" style={{ fontWeight: 400 }}>
              {generateRandomSentence()} {generateRandomSentence()}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
              <div className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src="" />
                  <AvatarFallback>{getInitials(opName)}</AvatarFallback>
                </Avatar>
                <p className="font-semibold">@{opName}</p>
              </div>
              <div className="flex items-center gap-5 font-mono">
                <p>{getTodayDate()}</p>
                <p className="flex items-center justify-center gap-1">
                  <ArrowUp size={14} /> {100}
                </p>
                <p className="flex items-center justify-center gap-1">
                  <MessageSquare size={14} /> {100}
                </p>
              </div>
            </div>
          </section>
          <section>
            <ul>
              {Array.from({ length: 100 }).map((_, index) => (
                <Comment
                  key={index}
                  commments={
                    index % 2 == 1
                      ? Array.from({ length: getRandomIntBetween(index, 2) })
                      : []
                  }
                />
              ))}
            </ul>
          </section>
          <section className="bg-white border-t z-10 fixed w-full py-2 left-0 bottom-0 px-5">
            <div className="_container flex gap-3">
              <Input placeholder="write your thoughts..." />
              <Button>send</Button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
