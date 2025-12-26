export function ProductHero() {
  return (
    <section
      className="
        relative overflow-hidden
        rounded-xl
        px-4 sm:px-10
        py-8 sm:py-16
        text-center text-white
        bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/product-hero-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10">
        <h1 className="text-lg sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-3">
          Simple. Trusted. Safety-First Policies
        </h1>

        <p className="mx-auto max-w-xs sm:max-w-2xl text-xs sm:text-base text-white/90">
          Explore curated insurance plans designed to protect you and your
          family, with clear coverage details and no hidden confusion.
        </p>
      </div>
    </section>
  );
}
