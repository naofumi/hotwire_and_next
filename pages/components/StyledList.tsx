import {CheckCircleIcon} from "@heroicons/react/20/solid";
import StyledLink from "@/pages/components/StyledLink";
import {ReactNode} from "react";

export default function StyledList({children, color = "text-orange-600"}: {children: ReactNode, color?: string}) {
  return (
    <li className="flex gap-x-3">
      <CheckCircleIcon aria-hidden="true" className={`mt-1 h-5 w-5 flex-none ${color}`} />
      <span>
        {children}
      </span>
    </li>
  )
}
