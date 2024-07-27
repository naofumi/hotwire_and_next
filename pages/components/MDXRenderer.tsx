import React from "react";
import {h1, h2, p} from "@/pages/components/MDXComponents";
import {MDXProvider} from "@mdx-js/react";

const components = {
  h1: h1,
  h2: h2,
  p: p,
}

export default function MDXRenderer({ children }: { children: React.ReactNode }) {
  return(
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
  )
}
