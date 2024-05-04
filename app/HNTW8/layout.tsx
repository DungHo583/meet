import "~/styles/global.scss";

import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Meet - TGTW",
  description: "meet - tgtw",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
