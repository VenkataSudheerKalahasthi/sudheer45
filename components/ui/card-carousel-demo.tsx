import React from "react";

import { CardCarousel } from "@/components/ui/card-carousel";

const CardCarouselDemo = () => {
  const images = [
    {
      src: "/design_carosoul/trustpay-card.png",
      alt: "TrustPay",
      link: "https://github.com/VenkataSudheerKalahasthi/TrustPay",
    },
    {
      src: "/design_carosoul/college-dsa.png",
      alt: "College DSA Rankboard",
      objectPosition: "left center",
      link: "https://github.com/VenkataSudheerKalahasthi/RankBoard",
    },
    {
      src: "/design_carosoul/codeorbit-card.jpg",
      alt: "CodeOrbit",
      objectPosition: "left center",
      link: "https://github.com/VenkataSudheerKalahasthi",
    },
    {
      src: "/design_carosoul/aboutme-card.png",
      alt: "About Me - Venkata Sudheer",
      objectPosition: "center",
      link: "#contact",
    },
    {
      src: "/design_carosoul/trustpay-light.png",
      alt: "TrustPay Escrow",
      objectPosition: "left top",
      link: "https://github.com/VenkataSudheerKalahasthi/TrustPay",
    },
    {
      src: "/design_carosoul/ganesh-utsav.png",
      alt: "Ganesh Utsav Committee",
      objectPosition: "center top",
      link: "https://github.com/VenkataSudheerKalahasthi",
    },
    {
      src: "/design_carosoul/linora-dark.png",
      alt: "LINORA - Dark",
      objectPosition: "center top",
      link: "https://github.com/VenkataSudheerKalahasthi/Linora",
    },
    {
      src: "/design_carosoul/linora-cream.png",
      alt: "LINORA - Minimal",
      objectPosition: "center top",
      link: "https://github.com/VenkataSudheerKalahasthi/Linora",
    },
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={3500}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default CardCarouselDemo;
