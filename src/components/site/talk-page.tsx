import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SITE } from "@/lib/site";

export function TalkPage() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        message: message.trim(),
        at: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem("rbk-talk") || "[]") as unknown[];
      localStorage.setItem("rbk-talk", JSON.stringify([...existing, payload]));
    } catch {
      /* front-end only */
    }
    setDone(true);
  }

  return (
    <main id="main" className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-xs font-medium tracking-widest text-steel uppercase">Talk with Brian</p>
          <h1 className="font-display mt-4 text-display leading-tight font-medium tracking-tight">
            If the constraint is real and the timing is now, let’s talk.
          </h1>
          <span className="steel-rule mt-6" />
          <div className="prose-site mt-8 max-w-xl text-lede leading-relaxed text-ink/90">
            <p>
              I work with seven-figure founder-led companies on systems, fractional COO work,
              and Acorn. I also take speaking inquiries.
            </p>
            <p>
              Winning has to include more time with family. If that is not on the table, we
              are not a fit.
            </p>
          </div>
          <p className="mt-8 text-sm text-muted">
            Prefer email?{" "}
            <a href={`mailto:${SITE.email}`} className="text-ink underline decoration-steel/60 underline-offset-4">
              {SITE.email}
            </a>
          </p>
          <p className="mt-6">
            <Link to="/" hash="how-i-work" className="text-sm text-muted hover:text-ink">
              ← How I work with founders
            </Link>
          </p>
        </div>

        <div className="rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8">
          {done ? (
            <div>
              <h2 className="font-display text-2xl font-medium">Got it.</h2>
              <p className="mt-3 text-muted">
                I’ll be in touch at {email}. If it’s urgent, write me directly at {SITE.email}.
              </p>
              <Button asChild className="mt-6" variant="secondary">
                <Link to="/">Back to the page</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="talk-name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="talk-name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="talk-email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="talk-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="talk-company" className="mb-1.5 block text-sm font-medium">
                  Company <span className="font-normal text-muted">(optional)</span>
                </label>
                <Input
                  id="talk-company"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="talk-message" className="mb-1.5 block text-sm font-medium">
                  What we should talk about
                </label>
                <textarea
                  id="talk-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex w-full rounded-md border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted shadow-[var(--shadow-border)] transition-[border-color,box-shadow] duration-150 focus-visible:border-steel focus-visible:ring-2 focus-visible:ring-steel/40 focus-visible:outline-none"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Request a conversation
              </Button>
              <p className="text-xs text-muted">
                Front-end for now. I will not sell your address.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
