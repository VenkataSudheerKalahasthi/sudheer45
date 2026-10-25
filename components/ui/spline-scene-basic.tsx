'use client';

import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightArmed, setSpotlightArmed] = useState(false);
  const [loadScene, setLoadScene] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }

    if (!cardRef.current) return;
    const el = cardRef.current;

    // Load scene only when approaching viewport to keep hero & initial scroll buttery smooth
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSpotlightArmed(true);
            setLoadScene(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <Card ref={cardRef} className="w-full h-full rounded-none border-0 bg-black/[0.96] relative overflow-hidden">
      {spotlightArmed && (
        <Spotlight
          key="spotlight-armed"
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      )}

      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 py-12 md:py-16 relative z-10 flex flex-col justify-center items-center md:items-end px-6 md:pr-12 pointer-events-none text-center md:text-right">
          <div className="max-w-lg w-full">
            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Built Different.
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300">
              Welcome. You&apos;re not here by accident.
              I&apos;m Sudheer Kalahasthi a developer who thinks in systems,
              designs with intent, and ships things that matter.
              Scroll down. See for yourself.
            </p>
          </div>
        </div>

        <div className="flex-1 relative pointer-events-auto min-h-[300px] flex items-center justify-center">
          {loadScene && !isMobile && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
          {isMobile && (
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500/20 to-amber-500/20 blur-3xl pointer-events-none" />
          )}
        </div>
      </div>
    </Card>
  );
}

export default SplineSceneBasic;
