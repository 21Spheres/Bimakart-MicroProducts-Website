import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  highlighted?: boolean;
}

export function ProductCard({
  title,
  description,
  highlighted = false,
}: Props) {
  return (
    <div
      className={`
        w-full
        bg-white
        rounded-xl
        flex flex-col
        overflow-hidden
        shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        transition
        ${highlighted ? "ring-2 ring-blue-500" : "border border-gray-100"}
      `}
    >
      {/* TOP CONTENT */}
      <div className="flex flex-col items-center text-center px-4 sm:px-6 pt-6 sm:pt-8 pb-4 sm:pb-6">
        {/* Avatar */}
        <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] rounded-full bg-orange-100 flex items-center justify-center mb-3 sm:mb-4">
          <img
            src="/policy-avatar.png"
            alt={title}
            className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px]"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">
          {description}
        </p>
      </div>

      {/* FOOTER CTA */}
      <Link
        to="/policies/kartavya"
        className="
          mt-auto
          w-full
          bg-brand-orange
          hover:bg-brand-orangeHover
          text-white
          text-xs
          font-medium
          py-2 sm:py-2.5
          flex items-center justify-center
        "
      >
        Buy Now
      </Link>
    </div>
  );
}
