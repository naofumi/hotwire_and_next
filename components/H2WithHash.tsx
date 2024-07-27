import Link from "next/link";
import {ReactNode} from "react";

export default function H2WithHash({id, children}: { id: string, children: ReactNode }) {
  return (
    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id={id}>
      {children}
      <Link href={`#${id}`} className="ml-4 text-gray-400">#</Link>
    </h2>
  )
}
