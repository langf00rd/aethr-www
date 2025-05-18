"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function BackButton() {
  function handleBackAction() {
    window.history.back();
  }
  return (
    <Button onClick={handleBackAction} variant="secondary">
      <ChevronLeft /> back
    </Button>
  );
}
