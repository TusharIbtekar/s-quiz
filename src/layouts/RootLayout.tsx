import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return <main className="max-w-3xl mx-auto pt-10">{children}</main>;
}
