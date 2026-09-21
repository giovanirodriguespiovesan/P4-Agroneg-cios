import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer, WhatsAppFab } from "./Footer";

export function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
