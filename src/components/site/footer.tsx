import { Link } from "@tanstack/react-router";
import { COMPANY_LINKS, NAV, SITE, SOCIALS } from "@/lib/site";
import { IconLinkedIn, IconX, IconYouTube } from "@/components/site/icons";

const SOCIAL_ICONS = {
  X: IconX,
  LinkedIn: IconLinkedIn,
  YouTube: IconYouTube,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-medium tracking-tight">{SITE.mark}</p>
          <p className="mt-3 max-w-md text-cream/75">{SITE.standFor}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-5 inline-block text-gold hover:text-cream"
          >
            {SITE.email}
          </a>
          <p className="mt-2 text-sm text-cream/55">{SITE.domain}</p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-widest text-gold uppercase">On this page</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.hash}>
                <a href={`/#${item.hash}`} className="text-sm text-cream/80 hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-widest text-gold uppercase">Companies</p>
          <ul className="mt-4 space-y-2">
            {COMPANY_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/80 hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/talk" className="text-sm text-cream/80 hover:text-cream">
                Talk with Brian
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.label];
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-11 items-center justify-center rounded-md border border-cream/15 text-cream/80 transition-colors duration-150 hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Brian Keith</p>
          <p>I do not sell your email. No tracking cookies on this page.</p>
        </div>
      </div>
    </footer>
  );
}
