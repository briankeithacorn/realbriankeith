import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const FOLLOW = [
  { label: "X", href: "https://x.com/briankeith", detail: "@briankeith" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/briankeithal", detail: "/in/briankeithal" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-medium tracking-tight">{SITE.mark}</p>
          <p className="mt-3 max-w-md text-cream/75">{SITE.standFor}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 inline-block text-fog hover:text-cream"
          >
            {SITE.email}
          </a>
        </div>

        <div>
          <p className="text-xs font-medium tracking-widest text-fog uppercase">Follow</p>
          <ul className="mt-4 space-y-2">
            {FOLLOW.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/80 hover:text-cream"
                >
                  {item.label}
                  <span className="ml-2 text-cream/50">{item.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-widest text-fog uppercase">Work</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://buyacorn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-cream hover:text-fog"
              >
                Explore Acorn
              </a>
            </li>
            <li>
              <Link to="/talk" className="text-sm text-cream/80 hover:text-cream">
                Talk with Brian
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Brian Keith</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <a
              href="https://x.com/briankeith"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/briankeithal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              LinkedIn
            </a>
            <a
              href="https://buyacorn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream"
            >
              Explore Acorn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
