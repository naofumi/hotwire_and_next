import React from "react";
import {a, code, h2, h3, p, ul} from "@/pages/components/MDXComponents";
import {MDXProvider} from "@mdx-js/react";

const components = {
  h2: h2,
  h3: h3,
  p: p,
  a: a,
  code: code,
  ul: ul,
}

export default function MDXRenderer({ children }: { children: React.ReactNode }) {
  return(
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
  )
}
