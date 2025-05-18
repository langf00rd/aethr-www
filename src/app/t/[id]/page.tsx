import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  generateRandomSentence,
  generateRandomWord,
  getInitials,
} from "@/lib/utils";

export default function TopicPage() {
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl" style={{ fontWeight: 400 }}>
          {generateRandomSentence()} {generateRandomSentence()}
        </h1>
        <div className="flex items-center gap-1">
          <Avatar className="size-12">
            <AvatarImage src="" />
            <AvatarFallback>{getInitials(generateRandomWord())}</AvatarFallback>
          </Avatar>
          <p className="font-semibold">@{generateRandomWord()}</p>
        </div>
      </section>
    </>
  );
}
