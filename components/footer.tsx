// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Icon imports
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/pro-regular-svg-icons";

// Local component imports
import { Section, Container } from "@/components/craft"

// Asset imports
import Logo from "@/public/vercel.svg";
import { RadioToggle } from "./darkmode/toggle";

export default function Footer() {
  return (
        <footer className="bg-gray-200 dark:bg-neutral-800 rounded-t-2xl">
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">lifeonmarsindica</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
                I am a musician that is trying to make it in the world.
                Please support me by following me on social media.
              </Balancer>
            </p>
            <p>
                <Balancer>
                    Made with <FontAwesomeIcon icon={faHeart} className="dark:text-indigo-300 text-indigo-500" /> by <Link className="font-kallisto hover:dark:text-indigo-300 hover:text-indigo-500 hover:underline duration-300 transition-all font-bold" href="https://arcehry-luna.com">Archery Luna</Link>
                </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-semibold font-display">Website</h5>
            <Link className="hover:dark:text-indigo-300 hover:underline hover:text-indigo-500 transition-all duration-300" href="/">Blog</Link>
            <Link className="hover:dark:text-indigo-300 hover:underline hover:text-indigo-500 transition-all duration-300" href="/">Authors</Link>
            <Link className="hover:dark:text-indigo-300 hover:underline hover:text-indigo-500 transition-all duration-300" href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-display font-semibold">Legal</h5>
            <Link className="hover:dark:text-indigo-300 hover:underline hover:text-indigo-500 transition-all duration-300" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:dark:text-indigo-300 hover:underline hover:text-indigo-500 transition-all duration-300" href="/terms-of-service">Terms of Service</Link>
            <Link className="hover:dark:text-indigo-300 hover:underline hover:text-indigo-500 transition-all duration-300" href="/cookie-policy">Cookie Policy</Link>
            <br/>
            <RadioToggle />
        </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
            <Button variant="outline" size="icon">
                <Youtube />
            </Button>
            <Button variant="outline" size="icon">
                <Linkedin />
            </Button>
          </div>
          <p className="text-muted-foreground">
            ©{" "}
            <a className="font-semibold underline text-indigo-500 dark:text-indigo-300" href="https://lifeonmarsindica.com">lifeonmarsindica</a>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}

