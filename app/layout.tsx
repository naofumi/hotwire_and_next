import type {Metadata} from "next";
import "../styles/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next app | Hotwire for Frontend devs",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
    <div className="bg-white flex justify-between p-1">
      <Link href="/" className="text-lg p-1 rounded bg-indigo-600 text-white">Top</Link>
      <div className="text-lg p-1 rounded bg-blue-600 text-white">Next.js</div>
    </div>
    {children}
    </body>
    </html>
  );
}
