export function SocialProof1() {
  return (
    <div className="px-5 py-12 lg:p-20">
      <div className="flex flex-col gap-5 lg:gap-9">
        <div
          role="marquee"
          className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-10 gap-y-7 grayscale"
        >
          {logos.map((src) => (
            // Replace this with your real logos
            <div key={src} className="flex shrink-0 items-center gap-2">
              <img src={src} />
              <span className="text-base font-bold">Logoipsum</span>
            </div>
          ))}
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
