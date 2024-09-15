"use client"
import React from "react";
import { HeroParallax } from "@/components/ui/hero-paralax";

const Locations = [
    {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    },{
    title: "New York",
    thumbnail: "/locations/new-york.jpeg",
    link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    },     {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    },{
    title: "New York",
    thumbnail: "/locations/new-york.jpeg",
    link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, 
    {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    },{
    title: "New York",
    thumbnail: "/locations/new-york.jpeg",
    link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, 
    {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    },{
    title: "New York",
    thumbnail: "/locations/new-york.jpeg",
    link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, {
        title: "New York",
        thumbnail: "/locations/new-york.jpeg",
        link: "/locations/new-york",
    }, 

]

export function AboutHero() {
    

    return (
        <HeroParallax products={Locations} />
    );
}
