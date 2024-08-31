"use client";
import React from 'react'

import { cn } from "@/lib/utils"
import Link from 'next/link'
import { Button } from '@/components/ui/button';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

import { faGuitar, faDrum } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GlareCard } from '@/components/ui/glare-card';
function NavigationFrame() {

    return  (
            <nav className='nav fixed z-50 bg-background'>
                <div className='nav-section py-[1rem] md:px-0 lg:px-[1rem] px-3 w-full'>
                    <div className="grid grid-cols-2 gap-2 mx-4 md:mx-12 xl:mx-32 2xl:mx-60 w-full">
                        <div className="flex gap-x-4">
                        <div className="inline-block">
                            <Link href='/' className="inline-flex gap-2 mt-1.5">
                               <h1 className="font-display font-bold">lifeonmarsindica</h1> 
                            </Link>
                        </div>
                        <div className="hidden lg:grid lg:justify-items-start">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                    <NavigationMenuTrigger>Info DUMP</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid grid-cols-3 gap-3 p-6 md:w-[900px] lg:w-[800px]">
                                            <li className="col-span-1 row-span-3">
                                                <NavigationMenuLink asChild>
                                                    
                                                    <Link
                                                        href="/band"
                                                    >
                                                        <GlareCard
                                                        className="flex select-none flex-col justify-end rounded-md p-6"
                                                        >
                                                        <div className="mb-2 font-display grid font-bold mt-4 text-lg text-white">
                                                        <FontAwesomeIcon icon={faDrum} className="text-4xl mb-2 text-white justify-start" />
                                                            Band
                                                        </div>
                                                        <p className="text-sm leading-tight text-gray-200 dark:text-muted-foreground">
                                                            The best band in the world.
                                                        </p>
                                                        </GlareCard>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li className="col-span-1 row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href="/solo"
                                                    >
                                                        <GlareCard
                                                            className="flex select-none flex-col justify-end rounded-md p-6"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg grid font-display font-bold text-white">
                                                            <FontAwesomeIcon icon={faGuitar} className="text-4xl mb-2 text-white justify-start" />
                                                                Solo
                                                            </div>
                                                            <p className="text-sm leading-tight text-gray-200 dark:text-muted-foreground">
                                                                The best solo artist in the world.
                                                            </p>
                                                        </GlareCard>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li className="row-span-1 inline-flex gap-x-1 w-full">
                                                <ListItem href="/busking" title="Busking">
                                                    <p> Standing on the streets singing. </p>
                                                </ListItem>
                                            </li>
                                            <li className="row-span-1 inline-flex gap-x-1 w-full">
                                                <ListItem href="/about" title="About Me">
                                                    Who am I?
                                                </ListItem>
                                            </li>
                                            <li className="row-span-1 inline-flex gap-x-1 w-full">
                                                <ListItem href="/donations" title="Donate">
                                                    Donate to me and keep me singing.
                                                </ListItem>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                    <Link href="https://instagram.com/lifeonmarsindica">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Instagram
                                        </NavigationMenuLink>
                                    </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        </div>
                        <div className="justify-end hidden lg:inline-block">
                            <Link href="/contact">
                                <Button>Contact Me</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/2 blur-sm" />
                <div className="hidden lg:absolute  bottom-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/2" />
            </nav>
    )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
            prefetch={true}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
            className
          )}
          {...props}
        >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default NavigationFrame
