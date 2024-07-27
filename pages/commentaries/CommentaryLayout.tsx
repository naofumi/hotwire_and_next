import Layout from "@/pages/components/Layout";
import React, {ReactNode} from "react";

export default function CommentaryLayout(
  {children, title, subtitle, section}: {children: ReactNode, title: string, subtitle: string, section: string}
) {
  return <Layout hideTechLabel={true}>
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-orange-600">
          {section}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-xl leading-8">
          {subtitle}
        </p>
        <div className="mt-10 max-w-2xl mx-auto">
              {children}
        </div>
      </div>
    </div>
  </Layout>
}
