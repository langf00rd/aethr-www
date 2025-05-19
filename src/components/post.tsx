import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  generateRandomSentence,
  generateRandomWord,
  getInitials,
  getTodayDate,
} from "@/lib/utils";
import Link from "next/link";
import { PostActions } from "./content-actions";
import { Badge } from "./ui/badge";

export default function Post() {
  return (
    <li className="px-5 border-b py-5 hover:bg-gray-50 transition-all hover:scale-[1.02] hover:border-1 hover:shadow-md">
      <Link
        href={"/t/" + Date.now()}
        className="flex items-start gap-2 group w-full"
      >
        <Avatar className="size-12">
          <AvatarImage src="" />
          <AvatarFallback>{getInitials(generateRandomWord())}</AvatarFallback>
        </Avatar>
        <div className="space-y-3 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <p className="font-semibold text-black transition-colors group-hover:underline font-mono text-[14px]">
                @{generateRandomWord()}
              </p>
              <Badge className="bg-neutral-200 text-neutral-800">
                #{generateRandomWord()}
              </Badge>
            </div>
            <p className="text-[14px] text-neutral-500">{getTodayDate()}</p>
          </div>
          <p className="text-[15px]">{generateRandomSentence()}</p>
          <PostActions />
        </div>
      </Link>
    </li>
  );
}
