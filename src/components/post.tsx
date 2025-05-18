import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  generateRandomSentence,
  generateRandomWord,
  getInitials,
  getTodayDate,
} from "@/lib/utils";
import { ArrowUp, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Post() {
  return (
    <li className="px-5 border-b py-5 hover:bg-gray-50 transition-all hover:scale-[1.02] hover:border-1 hover:shadow-md">
      <Link href={"/t/" + Date.now()} className="flex items-start gap-2 group">
        <Avatar className="size-12">
          <AvatarImage src="" />
          <AvatarFallback>{getInitials(generateRandomWord())}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <p className="font-semibold text-black transition-colors group-hover:underline font-mono text-[14px]">
                @{generateRandomWord()}
              </p>
              <Badge className="bg-neutral-200 text-neutral-800">
                #{generateRandomWord()}
              </Badge>
            </div>
            <div className="flex items-center gap-5 text-[14px] font-mono">
              <p>{getTodayDate()}</p>
              <p className="flex items-center justify-center gap-1">
                <ArrowUp size={14} /> {100}
              </p>
              <p className="flex items-center justify-center gap-1">
                <MessageSquare size={14} /> {100}
              </p>
            </div>
          </div>
          <p className="text-[15px]">{generateRandomSentence()}</p>
        </div>
      </Link>
    </li>
  );
}
