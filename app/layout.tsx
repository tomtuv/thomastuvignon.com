import { ViewTransitions } from "next-view-transitions";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
