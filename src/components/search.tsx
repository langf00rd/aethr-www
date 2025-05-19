"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchBox() {
  const [showSearchInput, setShowSearchInput] = useState(false);

  function toggleSearchInput() {
    setShowSearchInput((prev) => !prev);
  }

  return (
    <div className="flex items-center gap-3">
      {showSearchInput && <Input placeholder="search the aethr..." />}
      <Button
        onClick={toggleSearchInput}
        variant="ghost"
        className="rounded-full"
      >
        {!showSearchInput ? <Search /> : <X />}
      </Button>
    </div>
  );
}
