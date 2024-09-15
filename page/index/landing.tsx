
import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HeroScroller } from "@/components/ui/hero-scroll";

export function LandingPageHome() {
  return (
    <BackgroundBeamsWithCollision>
        <div className="h-[40rem] flex items-center justify-center">
            <TextHoverEffect text="lifeonmarsindica" />
        </div>
        <HeroScroller />
        <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
        <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
        <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
        <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
    </BackgroundBeamsWithCollision>
  );
}

