"use client";

import { Suspense } from "react";
import UpdatePrompt from "./page";

export default function UpdatePromptPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
}
