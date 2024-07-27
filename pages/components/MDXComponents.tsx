import {ReactNode} from "react";

export function h1({children}: {children?: ReactNode}) {
  return <h1 className="text-2xl font-bold">{children}</h1>
}

export function h2({children}: {children?: ReactNode}) {
  return <h1 className="text-xl font-bold">{children}</h1>
}

export function p({children}: {children?: ReactNode}) {
  return <p className="text-gray-700 my-4 text-base">{children}</p>;
}
