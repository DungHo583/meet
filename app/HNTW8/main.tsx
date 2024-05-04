/* eslint-disable @next/next/no-img-element */

"use client";

import { Frame } from "~/app/HNTW8/frame";
import { Header } from "~/app/HNTW8/header";
import { Prejoin } from "~/app/HNTW8/prejoin";
import { useStore } from "~/app/HNTW8/store";
import { Footer } from "~/app/HNTW8/footer";
import { useStreamSource } from "~/hooks/use-stream-source";

export function Main() {
  const joined = useStore((state) => state.joined);

  if (joined) {
    return <MainContent />;
  }

  return <Prejoin />;
}

function MainContent() {
  const streamSource = useStreamSource();

  if (streamSource === undefined) {
    return null;
  }
  return (
    <div className="w-screen h-screen bg-cover bg-[url('/bg.svg')]">
      <Header streamSource={streamSource} />
      <Frame streamSource={streamSource} />
      <Footer />
    </div>
  );
}
