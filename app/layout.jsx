import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import { Suspense } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
