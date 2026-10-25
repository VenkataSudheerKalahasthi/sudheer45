"use client";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { LampDemo } from "@/components/ui/lamp";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import ScrollExpand from "@/components/animations/ScrollExpand";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { RulerCarousel, type CarouselItem } from "@/components/ui/ruler-carousel";

const rulerItems: CarouselItem[] = [
  { id: 1, title: "DEVELOPER" },
{ id: 2, title: "PROBLEM-SOLVER" },
{ id: 3, title: "ENGINEER" },
{ id: 4, title: "INNOVATOR" },
{ id: 5, title: "PROGRAMMER" },
{ id: 6, title: "TECH ENTHUSIAST" },
{ id: 7, title: "AI EXPLORER" },
{ id: 8, title: "DSA ENTHUSIAST" },
{ id: 9, title: "BUILDER" },
];

export default function ZoomParallaxDemo() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Modern architecture building",
    },
    {
      src: "/Design_zoomparallax/codeorbit-zoomparallax.jpg",
      alt: "CodeOrbit",
    },
    {
      src: "/Design_zoomparallax/college-dsa-zoomparallax.png",
      alt: "College DSA Rankboard",
    },
    {
      src: "/Design_zoomparallax/linora-dark.png",
      alt: "LINORA",
    },
    {
      src: "/Design_zoomparallax/trustpay-zoomparallax.png",
      alt: "TrustPay",
    },
    {
      src: "/Design_zoomparallax/aboutme-zoomparallax.png",
      alt: "About Me",
    },
    {
      src: "/Design_zoomparallax/ganesh-utsav.png",
      alt: "Ganesh Utsav Committee",
    },
  ];

  return (
    <section className="w-full">
      <div className="relative flex h-[50vh] items-center justify-center">
        <h1 className="text-center text-4xl font-bold">
          Built to Solve. Designed to Matter.
        </h1>
      </div>
      <ZoomParallax
        images={images}
        portalIndex={0}
        portalContent={<LampDemo />}
      />
      <ScrollExpand
        stageBackground="radial-gradient(ellipse 100% 80% at 50% 50%, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.07) 28%, #08080f 58%, #050508 100%)"
        background="#080808"
      >
        <ProjectShowcase />
      </ScrollExpand>

      <ScrollReveal className="w-full">
        <RulerCarousel originalItems={rulerItems} />
      </ScrollReveal>
    </section>
  );
}
