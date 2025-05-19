import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IComment } from "@/lib/entities";
import {
  generateRandomSentence,
  generateRandomWord,
  getInitials,
} from "@/lib/utils";
import { PostActions } from "./content-actions";
import { Badge } from "./ui/badge";

export default function Comment(props: { commments: IComment[] }) {
  return (
    <li className="px-5 border-b last:border-none last:-mb-5 py-5 hover:bg-gray-50 transition-colors">
      <div className="flex items-start gap-2 group w-full">
        <Avatar className="size-10">
          <AvatarImage src="" />
          <AvatarFallback>{getInitials(generateRandomWord())}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <p className="font-semibold text-black transition-colors group-hover:underline font-mono text-[14px]">
                @{generateRandomWord()}
              </p>
              <Badge className="bg-neutral-200 text-neutral-800">
                #{generateRandomWord()}
              </Badge>
            </div>
          </div>
          <p className="text-[15px]">{generateRandomSentence()}</p>
          <PostActions type="comment" />
        </div>
      </div>
      {props.commments && (
        <ul className="ml-6 border-l border-dashed">
          {Array.from({ length: props.commments.length || 0 }).map(
            (_, index) => (
              <Comment commments={[]} key={index} />
            ),
          )}
        </ul>
      )}
    </li>
  );
}
