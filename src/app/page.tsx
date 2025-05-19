import HomeHeader from "@/components/headers/home";
import Post from "@/components/post";
import { generateRandomWord } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex">
      <LeftSideColumn />
      <RecentPosts />
    </section>
  );
}

export function LeftSideColumn() {
  return (
    <div className="sticky top-3 max-h-[90vh] hidden md:block w-[200px]">
      <h1 className="max-w-[200px] pb-5 font-extrabold font-sans text-2xl text-gray-700">
        most <span className="italic text-gray-500">esoteric</span> community on
        the internet
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
        {Array.from({ length: 5 }).map((_, index) => (
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
      <HomeHeader />
      <ul className="-mt-5">
        {Array.from({ length: 19 }).map((_, index) => (
          <Post key={index} />
        ))}
      </ul>
    </div>
  );
}
