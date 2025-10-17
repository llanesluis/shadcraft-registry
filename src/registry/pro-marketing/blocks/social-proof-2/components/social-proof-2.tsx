"use client";

import FastMarquee from "react-fast-marquee";

export function SocialProof2() {
  return (
    <div className="px-5 py-12 lg:p-20">
      <div className="flex flex-col gap-5 lg:gap-9">
        <div className="relative w-full overflow-hidden mask-x-from-95%">
          <FastMarquee autoFill className="text-muted-foreground grayscale">
            {logos.map((src) => (
              // Replace this with your real logos
              <div key={src} className="mx-5 flex shrink-0 items-center gap-2">
                <img src={src} />
                <span className="text-base font-bold">Logoipsum</span>
              </div>
            ))}
          </FastMarquee>
        </div>
        <p className="text-muted-foreground text-center text-sm leading-5 font-normal">
          Trusted by leading companies
        </p>
      </div>
    </div>
  );
}

const logos = [
  "/assets/logos/01.svg",
  "/assets/logos/02.svg",
  "/assets/logos/03.svg",
  "/assets/logos/04.svg",
  "/assets/logos/05.svg",
];
