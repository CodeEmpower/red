import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@components/layout/LeftSideBar";
import MainContainer from "@components/layout/MainContainer";
import RightSideBar from "@components/layout/RightSideBar";
import BottomBar from "@components/layout/BottomBar";
import NavBar from "@components/layout/NavBar";

export const metadata = {
  title: "Vibe Zone",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`} style={{ margin: 0 }}>
          <main className="flex flex-col min-h-screen">
            <NavBar />
            <section className="flex flex-row flex-1">
              <LeftSideBar />
              <MainContainer>{children}</MainContainer>
              <RightSideBar />
            </section>
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
