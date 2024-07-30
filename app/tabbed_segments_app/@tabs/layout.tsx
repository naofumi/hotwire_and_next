import {ReactNode} from "react";
import Link from "next/link";

export default function TabbedSegmentsLayout(
  {children}: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
