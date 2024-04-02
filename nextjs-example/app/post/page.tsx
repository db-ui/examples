"use client";
import { DBButton } from "@db-ui/react-components";

export default function Page() {
  return (
    <h1>
      Hello, Next.js! <DBButton onClick={() => alert("foobar")}>Test</DBButton>
    </h1>
  );
}
