import type { AnchorHTMLAttributes, ReactNode } from "react";

type NextLinkOnlyProps = {
  /** Accepted for backwards compatibility with next/link — ignored. */
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string;
};

export type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children?: ReactNode;
} & NextLinkOnlyProps;

/**
 * Drop-in replacement for `next/link` in a plain React (Vite) app.
 *
 * Every link in this project is either an in-page anchor (`#home`, `#about`, …)
 * or a fully qualified external URL, so a plain semantic `<a>` is exactly what
 * the Next.js client router would end up rendering anyway.
 */
export function Link({
  href,
  children,
  prefetch,
  replace,
  scroll,
  shallow,
  passHref,
  legacyBehavior,
  locale,
  ...rest
}: LinkProps) {
  void prefetch;
  void replace;
  void scroll;
  void shallow;
  void passHref;
  void legacyBehavior;
  void locale;

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

export default Link;
