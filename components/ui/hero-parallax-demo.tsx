"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "TrustPay",
    link: "https://github.com/VenkataSudheerKalahasthi/TrustPay",
    thumbnail: "/trustpay-hero.jpg",
    objectPosition: "left top",
  },
  {
    title: "College DSA Rankboard",
    link: "https://github.com/VenkataSudheerKalahasthi/RankBoard",
    thumbnail: "/college-dsa-hero.png",
    objectPosition: "left top",
  },
  {
    title: "CodeOrbit",
    link: "https://github.com/VenkataSudheerKalahasthi",
    thumbnail: "/codeorbit.png",
    objectPosition: "center",
  },
  {
    title: "LINORA",
    link: "https://github.com/VenkataSudheerKalahasthi/Linora",
    thumbnail: "/linora-hero.jpg",
    objectPosition: "left top",
  },
  {
    title: "CodeOrbit",
    link: "https://github.com/VenkataSudheerKalahasthi",
    thumbnail: "/codeorbit-light.png",
    objectPosition: "center",
  },
  {
    title: "LINORA",
    link: "https://github.com/VenkataSudheerKalahasthi/Linora",
    thumbnail: "/linora-cream.png",
    objectPosition: "left top",
  },
  {
    title: "Ganesh Utsav Committee",
    link: "https://github.com/VenkataSudheerKalahasthi",
    thumbnail: "/ganesh-utsav.png",
    objectPosition: "center top",
  },
  {
    title: "College DSA Rankboard",
    link: "https://github.com/VenkataSudheerKalahasthi/RankBoard",
    thumbnail: "/college-dsa-light.png",
    objectPosition: "left top",
  },
  {
    title: "Rankboard Leaderboard",
    link: "https://github.com/VenkataSudheerKalahasthi/RankBoard",
    thumbnail: "/rankboard-leaderboard.png",
    objectPosition: "center top",
  },
  {
    title: "Rankboard Dashboard",
    link: "https://github.com/VenkataSudheerKalahasthi/RankBoard",
    thumbnail: "/rankboard-dashboard.png",
    objectPosition: "left top",
  },
  {
    title: "CodeOrbit DSA Mastery",
    link: "https://github.com/VenkataSudheerKalahasthi",
    thumbnail: "/codeorbit-dsa-mastery.png",
    objectPosition: "left top",
  },
  {
    title: "Achievement Showcase",
    link: "https://github.com/VenkataSudheerKalahasthi/RankBoard",
    thumbnail: "/rankboard-showcase.png",
    objectPosition: "center top",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
