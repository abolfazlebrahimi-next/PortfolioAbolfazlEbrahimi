"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SmartImageProps = ImageProps & {
  /** Optional skeleton wrapper class */
  containerClassName?: string;
  /** Aspect ratio in CSS e.g. "4/5" — if provided, container uses it */
  aspect?: string;
};

/**
 * Image with built-in skeleton shimmer that shows during load and on error.
 * Used everywhere images appear so a failure degrades gracefully into a
 * pulsing skeleton rather than a broken-image icon.
 */
export function SmartImage({
  containerClassName,
  aspect,
  className,
  alt,
  ...imageProps
}: SmartImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface/40",
        aspect && `aspect-[${aspect}]`,
        containerClassName,
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {/* skeleton shimmer */}
      {status !== "loaded" ? (
        <div
          className="absolute inset-0 z-10 bg-gradient-to-br from-surface/60 via-surface to-surface/60"
          aria-hidden
        >
          <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.06)_50%,transparent_65%)] bg-[length:200%_100%]" />
        </div>
      ) : null}

      {status !== "error" ? (
        <Image
          {...imageProps}
          alt={alt}
          className={cn(
            "transition-opacity duration-700",
            status === "loaded" ? "opacity-100" : "opacity-0",
            className,
          )}
          onError={() => setStatus("error")}
          onLoad={() => setStatus("loaded")}
        />
      ) : null}

      {/* error fallback */}
      {status === "error" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-surface/60 text-muted-foreground">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-8 w-8 opacity-40"
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
      ) : null}
    </div>
  );
}
