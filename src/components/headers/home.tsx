import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchBox from "../search";
import { Button } from "../ui/button";

export default function HomeHeader() {
  return (
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
      <div className="flex items-center gap-5">
        <SearchBox />
        <Button>create</Button>
      </div>
    </div>
  );
}
