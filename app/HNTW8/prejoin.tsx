"use client";

import { useWindowSize } from "~/hooks/use-window-size";
import { Mobile } from "~/app/HNTW8/prejoin-mobile";
import { Desktop } from "~/app/HNTW8/prejoin-desktop";

export function Prejoin() {
  const { width } = useWindowSize();

  if (width < 680) {
    return <Mobile />;
  }

  return <Desktop />;
}
