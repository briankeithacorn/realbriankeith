import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function NavHref({
  hash,
  className,
  onClick,
  children,
}: {
  hash: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") {
    return (
      <a href={`#${hash}`} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to="/" hash={hash} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline"
          aria-label="Brian Keith — home"
        >
          <img
            src="/favicon-32.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-[7px]"
          />
          <span className="hidden text-xs tracking-widest text-muted uppercase sm:inline">
            Brian Keith
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavHref
              key={item.hash}
              hash={item.hash}
              className="text-sm text-ink/75 transition-colors duration-150 hover:text-ink"
            >
              {item.label}
            </NavHref>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant="steel" className="hidden sm:inline-flex">
            <Link to="/talk">Talk with Brian</Link>
          </Button>
          <Button asChild size="sm" variant="steel" className="sm:hidden">
            <Link to="/talk">Talk</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-cream lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-5 py-4 pb-10" aria-label="Mobile">
          {NAV.map((item) => (
            <NavHref
              key={item.hash}
              hash={item.hash}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-line font-display text-xl text-ink"
            >
              {item.label}
            </NavHref>
          ))}
          <Button asChild className="mt-5" variant="steel">
            <Link to="/talk" onClick={() => setOpen(false)}>
              Talk with Brian
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
