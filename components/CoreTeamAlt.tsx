"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { div } from "framer-motion/client";

const content = [
  {
    title: "Convener",
    description: "Shampurna Rakshit",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Shampurna.png"
          fill
          className="rounded-full object-cover"
          alt="Shampurna Rakshit - Convener"
        />
      </div>
    ),
  },
  {
    title: "Convener",
    description: "Zishan Khan ",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Zishan.png"
          fill
          className="rounded-full object-cover"
          alt="Zishan Khan  - Convener"
        />
      </div>
    ),
  },
  {
    title: "Convener",
    description: "Arijit Nandi",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Arijit.png"
          fill
          className="rounded-full object-cover"
          alt="Arijit Nandi - Convener"
        />
      </div>
    ),
  },
  {
    title: "Finance",
    description: "Champak Kundu",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Champak1.png"
          fill
          className="rounded-full object-cover"
          alt="Champak Kundu - Finance"
        />
      </div>
    ),
  },
  {
    title: "Tech Lead",
    description: "Nanda Lal Das",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Nanda01.jpeg"
          fill
          className="rounded-full object-cover"
          alt="Nanda Lal Das - Tech Lead"
        />
      </div>
    ),
  },
  {
    title: "Media Lead",
    description: "Sudipta Sen",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Sudipta.png"
          fill
          className="rounded-full object-cover"
          alt="Sudipta Sen - Media Lead"
        />
      </div>
    ),
  },
  {
    title: "Co-Ordinator",
    description: "Aniket Das",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Aniket.png"
          fill
          className="rounded-full object-cover"
          alt="Aniket Das - Co-Ordinator"
        />
      </div>
    ),
  },
  {
    title: "Co-Ordinator",
    description: "Arghyadip Roy",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Arghyadip.png"
          fill
          className="rounded-full object-cover"
          alt="Arghyadip Roy - Co-Ordinator"
        />
      </div>
    ),
  },
  {
    title: "Co-Ordinator",
    description: "Ankita Ghosh",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Ankita.png"
          fill
          className="rounded-full object-cover"
          alt="Arghyadip Roy - Co-Ordinator"
        />
      </div>
    ),
  },
  {
    title: "Marketing",
    description: "Tiyasha Kuri",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Triyasha.png"
          fill
          className="rounded-full object-cover"
          alt="Tiyasha Kuri - Decorator"
        />
      </div>
    ),
  },
  {
    title: "Decorations",
    description: "Riya Banerjee",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Riya.png"
          fill
          className="rounded-full object-cover"
          alt="Riya Banerjee - SPOC"
        />
      </div>
    ),
  },{
    title: "Gaming Admin",
    description: "Mohok Bhanja",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Mohok1.png"
          fill
          className="rounded-full object-cover"
          alt="Mohok Bhanja - Gaming Co-Ordinator"
        />
      </div>
    ),
  },
  {
    title: "SPOC",
    description: "Smarta Das",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/Smarta.png"
          fill
          className="rounded-full object-cover"
          alt="Smarta Das - SPOC"
        />
      </div>
    ),
  },
  {
    title: "Sorry Bhai :)",
    description: "Sayan Acharya",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/coreTeam/default.png"
          fill
          className="rounded-full object-cover"
          alt="Sayan Acharya - RickRoll"
        />
      </div>
    ),
  },
  
];

export function CoreTeamAlt() {
  return (
    <div>
        <p style={{ fontFamily: 'CustomFont' }} className="text-3xl sm:text-6xl font-mono text-center"> Meet the Core Team </p>
        <br /><br />
        <div className="p-10">
            <StickyScroll  content={content} contentClassName="custom-class" />
        </div>
    </div>
  );
}
