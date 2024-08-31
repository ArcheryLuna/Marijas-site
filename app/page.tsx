import Image from "next/image";
import { LandingPageHome } from "@/page/index/landing";
import { MainContentHomePage } from "@/page/index/main-content";

export default function Home() {
  return (
    <main>
        <LandingPageHome />
        <MainContentHomePage />
    </main>
  );
}
