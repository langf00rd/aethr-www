import Post from "@/components/post";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generateRandomWord } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex">
        <LeftSideColumn />
        <RecentPosts />
      </section>
    </>
  );
}

function LeftSideColumn() {
  return (
    <div className="sticky top-3 max-h-[90vh] hidden md:block">
      <h1 className="max-w-[200px] pb-5 font-extrabold text-xl text-gray-700">
        the most esoteric community on the internet
      </h1>
      <hr />
      <Topics />
      <hr />
      <Topics />
    </div>
  );
}

function Topics() {
  return (
    <div className="flex-1 space-y-4 py-5">
      <h3 className="font-semibold">hot topics now</h3>
      <ul className="space-y-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <li key={index}>
            <Link
              className="flex items-center gap-2 hover:text-primary group"
              href={"/t/" + index}
            >
              <p className="group-hover:underline">#{generateRandomWord()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecentPosts() {
  return (
    <div className="flex-[4] space-y-4 border-l">
      <div className="flex items-center justify-between px-5 pb-5 sticky top-0 pt-5 bg-white z-10 border-b">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            {["most valuable", "loud", "irrelevant"].map((item) => (
              <SelectItem value={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button>create</Button>
      </div>
      <ul className="-mt-5">
        {Array.from({ length: 19 }).map((_, index) => (
          <Post key={index} />
        ))}
      </ul>
    </div>
  );
}
