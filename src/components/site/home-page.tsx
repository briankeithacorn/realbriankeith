import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconLinkedIn, IconX, IconYouTube } from "@/components/site/icons";
import {
  OWNED,
  PROCESS,
  SITE,
  SOCIALS,
  VALUES,
} from "@/lib/site";
import { cn } from "@/lib/utils";

function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-widest uppercase",
        onDark ? "text-fog" : "text-steel",
      )}
    >
      {children}
    </p>
  );
}

function Section({
  id,
  children,
  className,
  dark = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-16 sm:py-20 lg:py-24",
        dark ? "bg-ink text-cream" : "bg-cream text-ink",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-1 hover:text-steel", className)}
    >
      {children}
      <ArrowUpRight className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("rbk-list") || "[]") as string[];
      localStorage.setItem("rbk-list", JSON.stringify([...new Set([...existing, email.trim()])]));
    } catch {
      /* front-end only */
    }
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-md border border-steel/40 bg-cream-deep px-4 py-4 text-ink">
        You’re on the list. The weekly note will start arriving once the list is wired.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex w-full flex-col gap-3", !compact && "sm:flex-row")}>
      <label className="sr-only" htmlFor="list-email">
        Email address
      </label>
      <Input
        id="list-email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="sm:flex-1"
      />
      <Button type="submit" className="sm:w-auto">
        Join the list
      </Button>
    </form>
  );
}

function Hero() {
  return (
    <section id="hero" className="bg-cream px-5 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="stagger-in">
          <Eyebrow>RBK · realbriankeith</Eyebrow>
          <h1 className="font-display mt-4 text-display leading-tight font-medium tracking-tight text-ink">
            {SITE.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lede leading-relaxed text-muted">
            Our children will inherit the world we design
            <br />
            Let's build it together.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild>
              <Link to="/talk">
                Work With Me
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <a href="#connected">Join the List</a>
            </Button>
            <a
              href="#socials"
              className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-medium text-ink/75 transition-colors duration-150 hover:text-ink"
            >
              Follow the Journey
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <figure className="portrait-frame overflow-hidden rounded-md bg-ink">
            <img
              src="/portrait.jpg"
              alt="Black-and-white portrait of Brian Keith, thoughtful, hand near chin"
              width={1280}
              height={1280}
              className="aspect-[2/3] w-full object-cover object-[center_18%]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function WhoIAm() {
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>Who I Am</Eyebrow>
          <h2 className="font-display mt-3 text-section font-medium tracking-tight">
            Two-business-owner family. Then the work of making myself redundant.
          </h2>
          <span className="steel-rule mt-6" />
        </div>
        <div className="prose-site max-w-2xl text-lede leading-relaxed text-ink/90">
          <p>
            I grew up in a two-business-owner family. I licked stamps for my mother’s
            credit-analysis training flyers and cleaned rental houses for my dad. That early
            immersion in the small-business ethos shaped everything that followed. I studied
            entrepreneurship, worked at an internet marketing firm, and in 2012 founded Red
            Beard Consulting. What began as marketing automation on the Keap platform evolved
            into full-service fractional COO work — the systems around the founder’s core offer.
          </p>
          <p>
            I make myself redundant. The goal is never to stay in the middle of the problem.
          </p>
          <Button asChild variant="secondary" className="mt-6">
            <a href="#manifesto">
              Read the manifesto
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function Manifesto() {
  return (
    <Section id="manifesto" dark>
      <Eyebrow onDark>Manifesto</Eyebrow>
      <h2 className="font-display mt-4 max-w-4xl text-section font-medium tracking-tight">
        I stand for manufacturing freedom for American small business owners.
      </h2>
      <span className="steel-rule mt-6" />
      <div className="prose-site mt-10 max-w-3xl text-lede leading-relaxed text-cream/88">
        <p>
          Our children will inherit the world we hand them. There is no one coming to save us.
          If we want that world to be a good place, we have to build it — intentionally, now —
          with the talents we’ve been given.
        </p>
        <p>
          The 100-hour-week grind is not sustainable. The absent entrepreneur parent is a
          failure of a parent, even when the intention was good. I want a world where most
          entrepreneurs have the real choice to be single-earner families if they want to —
          more time with their kids, more white space for creativity, less constant
          firefighting.
        </p>
        <p>I manufacture that freedom in three ways:</p>
        <ul className="mt-4 space-y-4 border-l border-steel/40 pl-5">
          <li>
            <strong className="text-cream">Acorn</strong> puts cutting-edge AI under the
            founder’s control on their own server. Humans orient. Agents execute. Trust is
            earned.
          </li>
          <li>
            <strong className="text-cream">Red Beard Consulting</strong> supplies high-grade
            fractional COO talent and systems when a company isn’t yet ready for a full-time
            executive at my level.
          </li>
          <li>
            <strong className="text-cream">Lenders Online Training</strong> strengthens the
            community banks, credit unions, and farm-credit lenders who actually finance
            American small businesses.
          </li>
        </ul>
        <p className="mt-8">
          Zone of control versus zone of influence is spiritual work. Most founder worry comes
          from treating things they cannot control as if they can. We expose the real cost of
          bringing something into control, run the ROI, and then decide. Objective hazards
          exist (like icefall on Mount Rainier). Once you’ve chosen the mountain, you don’t
          waste energy worrying about them. You manage the ones you can.
        </p>
        <p>
          This is how we manufacture freedom — one founder, one system, one white-space
          afternoon at a time — so the next generation inherits something worth having.
        </p>
      </div>
    </Section>
  );
}

function CoreValues() {
  return (
    <Section id="values">
      <div className="max-w-3xl">
        <Eyebrow>Core Values</Eyebrow>
        <h2 className="font-display mt-3 text-section font-medium tracking-tight">
          These five values are the operating system.
        </h2>
        <p className="mt-4 text-muted">
          Order is the point. They run 1 to 5. They are not a set of equals.
        </p>
      </div>
      <ol className="mt-12 max-w-2xl">
        {VALUES.map((value) => (
          <li
            key={value.number}
            className="flex gap-5 border-l-2 border-steel py-6 pl-5 first:pt-1 last:pb-1 sm:gap-7 sm:pl-7"
          >
            <span className="font-display w-6 shrink-0 text-2xl leading-none font-medium text-steel sm:text-3xl">
              {value.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                {value.name}
              </h3>
              {value.latin ? (
                <p className="font-display mt-1 text-base italic text-steel">{value.latin}</p>
              ) : null}
              <p className="mt-2 max-w-xl text-base text-muted">{value.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function FourWays() {
  return (
    <Section id="companies" className="bg-cream-deep">
      <div id="work" />
      <Eyebrow>Four ways</Eyebrow>
      <h2 className="font-display mt-3 max-w-3xl text-section font-medium tracking-tight">
        Four ways I manufacture freedom.
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        These are companies under me. They are not my identity. I am RBK. This is not a client
        list.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {OWNED.map((c, i) => (
          <article
            key={c.name}
            className="flex h-full flex-col rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]"
          >
            <span className="font-display text-sm text-steel">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-3 text-xs font-medium tracking-widest text-steel uppercase">{c.role}</p>
            <h3 className="font-display mt-2 text-2xl font-medium tracking-tight">{c.name}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{c.impact}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {c.href ? (
                <ExternalLink href={c.href} className="font-medium text-ink">
                  {c.href.replace("https://", "")}
                </ExternalLink>
              ) : null}
              {c.related ? (
                <ExternalLink href={c.related.href} className="text-muted">
                  {c.related.label}
                </ExternalLink>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <article
        id="shop"
        className="mt-12 rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8"
      >
        <Eyebrow>Shop seat</Eyebrow>
        <h3 className="font-display mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
          Bring me into your shop.
        </h3>
        <div className="prose-site mt-4 max-w-2xl text-lede leading-relaxed text-ink/90">
          <p>
            COO or CMO seat. $20k a month. Explicit three-month deals — we name what can
            actually get done in a quarter.
          </p>
          <p>
            Want the system without my calendar? Acorn at $5k a month, plus a few hours of me.
          </p>
        </div>
        <Button asChild className="mt-6">
          <Link to="/talk">
            Talk with Brian
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Link>
        </Button>
      </article>
    </Section>
  );
}

function PastWork() {
  return (
    <Section id="past">
      <Eyebrow>Past Work</Eyebrow>
      <h2 className="font-display mt-3 text-section font-medium tracking-tight">The flagship I am proud of.</h2>
      <article className="mt-10 max-w-3xl rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8">
        <p className="text-xs font-medium tracking-widest text-steel uppercase">
          Fractional COO · through early 2026
        </p>
        <h3 className="font-display mt-3 text-3xl font-medium tracking-tight">Ovadia Heart Health</h3>
        <p className="mt-4 text-base leading-relaxed text-ink/90">
          I helped grow the company from nearly nothing to a seven-figure operation with about
          20 staff. Mission: prevent and help people recover from heart attacks through
          metabolic health. Direct life-saving impact.
        </p>
        <ExternalLink href="https://ovadiahearthealth.com" className="mt-5 font-medium text-ink">
          ovadiahearthealth.com
        </ExternalLink>
      </article>
    </Section>
  );
}

function HowIWork() {
  return (
    <Section id="how-i-work" dark>
      <div className="max-w-3xl">
        <Eyebrow onDark>How I Work With Founders</Eyebrow>
        <h2 className="font-display mt-3 text-section font-medium tracking-tight">
          A numbered process. Then I leave.
        </h2>
      </div>
      <ol className="mt-12 divide-y divide-cream/10 border-y border-cream/10">
        {PROCESS.map((step) => (
          <li key={step.number} className="grid grid-cols-[auto_1fr] gap-5 py-7 sm:gap-8">
            <span className="font-display text-3xl leading-none font-medium text-fog">
              {step.number}
            </span>
            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight">{step.name}</h3>
              <p className="mt-2 max-w-2xl text-base text-cream/75">{step.line}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 max-w-2xl text-lede leading-relaxed text-cream/88">
        Success is human: you can see it in their eyes. Reduced late-night worry, presence with
        family, a shrinking worry window.
      </p>
      <Button asChild variant="steel" size="lg" className="mt-8">
        <Link to="/talk">Talk with Brian</Link>
      </Button>
    </Section>
  );
}

const SOCIAL_ICONS = {
  X: IconX,
  LinkedIn: IconLinkedIn,
  YouTube: IconYouTube,
} as const;

function StayConnected() {
  return (
    <Section id="connected">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Stay Connected</Eyebrow>
          <h2 className="font-display mt-3 text-section font-medium tracking-tight">
            A weekly note on systems, AI, and founder freedom.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            One email a week. No cute name. No daily drip. Join the list — including if you
            want to be first to know when the book is out.
          </p>
          <div className="mt-6 max-w-lg">
            <NewsletterForm />
          </div>
          <p className="mt-4 text-sm text-muted">Book coming — join the list to be first to know.</p>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-medium tracking-widest text-steel uppercase">Social</p>
            <ul id="socials" className="mt-4 space-y-3">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.label];
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center gap-3 text-ink hover:text-steel"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-paper">
                        <Icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium">{s.label}</span>
                        <span className="block text-sm text-muted">{s.handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-steel uppercase">
              Speaking & booking
            </p>
            <p className="mt-3 max-w-sm text-muted">
              If you want me on a stage or in the room with a founder, that conversation starts
              here.
            </p>
            <Button asChild variant="secondary" className="mt-4">
              <Link to="/talk">Talk with Brian</Link>
            </Button>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest text-steel uppercase">
              Recommended reading
            </p>
            <p className="mt-3">
              Matt Chang,{" "}
              <a
                href="https://www.amazon.com/Risk-Taking-Biblical-Pursuing-Kingdom-Building/dp/B0FSY88H5Y"
                target="_blank"
                rel="noopener noreferrer"
                className="italic underline decoration-steel/60 underline-offset-4 hover:decoration-steel"
              >
                Risk-Taking is Biblical
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <WhoIAm />
      <Manifesto />
      <CoreValues />
      <FourWays />
      <PastWork />
      <HowIWork />
      <StayConnected />
    </>
  );
}
