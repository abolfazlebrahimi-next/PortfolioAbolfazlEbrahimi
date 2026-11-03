import type { CSSProperties, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type NativeImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "width" | "height" | "loading" | "decoding"
>;

export type ImageProps = NativeImgProps & {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  /** Makes the image fill its (relatively positioned) parent — like next/image. */
  fill?: boolean;
  sizes?: string;
  srcSet?: string;
  /** next/image only prop — ignored (no build-time optimizer in a SPA). */
  quality?: number | string;
  /** Eager loading + high fetch priority, like next/image's `priority`. */
  priority?: boolean;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  /** next/image only props — accepted and ignored. */
  placeholder?: "blur" | "empty" | `data:image/${string}`;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  overrideSrc?: string;
};

/**
 * Lightweight stand-in for `next/image`.
 *
 * Next's image component needs the Next.js server for on-demand resizing, which
 * does not exist in a pure React/Vite build. This shim keeps the same public
 * API (`fill`, `sizes`, `priority`, `quality`, …) so the components could be
 * migrated without changing a single layout class — the differences are:
 *   - files are served straight from `public/`
 *   - `fill` renders an absolutely positioned `<img>` (parent must be relative)
 */
export function Image({
  src,
  alt,
  fill = false,
  width,
  height,
  sizes,
  srcSet,
  quality,
  priority = false,
  loading,
  decoding,
  placeholder,
  blurDataURL,
  unoptimized,
  loader,
  overrideSrc,
  className,
  style,
  ...rest
}: ImageProps) {
  void quality;
  void placeholder;
  void blurDataURL;
  void unoptimized;
  void loader;
  void overrideSrc;

  const mergedStyle: CSSProperties | undefined =
    fill || width === undefined
      ? style
      : { width, height, ...style };

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      srcSet={srcSet}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding ?? "async"}
      fetchPriority={priority ? "high" : undefined}
      style={mergedStyle}
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
      {...rest}
    />
  );
}

export default Image;
