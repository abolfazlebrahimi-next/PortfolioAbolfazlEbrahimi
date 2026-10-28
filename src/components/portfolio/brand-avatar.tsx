"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandAvatarProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
  lg: "h-12 w-12",
};

/**
 * Circular portrait avatar visual (NOT a link).
 * Used inside <Link> wrappers in navbar + footer to brand the portfolio
 * with the owner's face. Keeping it a plain div avoids the invalid
 * nested-<a> hydration error.
 */
export function BrandAvatar({
  size = "md",
  className,
}: BrandAvatarProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/60 transition-all group-hover:border-[var(--lime)]/40",
        sizeMap[size],
        className,
      )}
    >
      <Image
        src="/portrait.jpg"
        alt="Abolfazl Ebrahimi"
        fill
        sizes="48px"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />
      {/* lime dot indicator */}
      <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--lime)] rtl:-left-0.5 rtl:right-auto" />
      {/* subtle ring on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-[var(--lime)]/40 transition-all group-hover:ring-2" />
    </span>
  );
}
