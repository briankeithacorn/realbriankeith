import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-zG-g3V9R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "Brian Keith",
	mark: "RBK",
	domain: "realbriankeith.com",
	email: "brian@realbriankeith.com",
	url: "https://realbriankeith.com",
	standFor: "I stand for manufacturing freedom for American small business owners.",
	headline: "Manufacturing Freedom for American Small Business Owners",
	description: "Fractional COO. Builder of Acorn. Systems that give founders their time — and their families — back."
};
var SOCIALS = [
	{
		label: "X",
		handle: "@briankeith",
		href: "https://x.com/briankeith"
	},
	{
		label: "LinkedIn",
		handle: "linkedin.com/in/briankeithal",
		href: "https://www.linkedin.com/in/briankeithal"
	},
	{
		label: "YouTube",
		handle: "Brian Keith – builder of Acorn",
		href: "https://www.youtube.com/@briankeithai"
	}
];
var COMPANY_LINKS = [
	{
		label: "Acorn",
		href: "https://buyacorn.com"
	},
	{
		label: "Red Beard Consulting",
		href: "https://redbeardconsulting.com"
	},
	{
		label: "Lenders Online Training",
		href: "https://lendersonlinetraining.com"
	}
];
var NAV = [
	{
		label: "About",
		hash: "about"
	},
	{
		label: "Manifesto",
		hash: "manifesto"
	},
	{
		label: "Values",
		hash: "values"
	},
	{
		label: "Work",
		hash: "work"
	},
	{
		label: "Companies",
		hash: "companies"
	},
	{
		label: "Past",
		hash: "past"
	},
	{
		label: "Process",
		hash: "how-i-work"
	},
	{
		label: "Connect",
		hash: "connected"
	}
];
var VALUES = [
	{
		number: "01",
		name: "Truth",
		line: "Veritas Vincit. Tell the truth always."
	},
	{
		number: "02",
		name: "Kindness",
		line: "Do it as kindly as you can."
	},
	{
		number: "03",
		name: "Focus",
		line: "80/20 everything. Focus only on what actually wins."
	},
	{
		number: "04",
		name: "Speed",
		line: "Apply speed only after the focus is right."
	},
	{
		number: "05",
		name: "Victory",
		line: "The first four, done consistently, produce victory."
	}
];
var PROCESS = [
	{
		number: "01",
		name: "Define winning",
		line: "Winning must include more time with family. If it does not, it is incomplete."
	},
	{
		number: "02",
		name: "Identify the biggest constraint",
		line: "Almost always cash or a critical operational bottleneck."
	},
	{
		number: "03",
		name: "80/20 the next three months",
		line: "Rate projects by impact, difficulty, likelihood, complexity."
	},
	{
		number: "04",
		name: "Install systems & subsidiarity",
		line: "Move decisions off the founder’s plate. Common early moves: email → Slack, short meetings with agendas, calendar protection for zone-of-genius hours."
	},
	{
		number: "05",
		name: "Create white space",
		line: "Protect best hours. Reduce weekend work. Build in actual joy."
	},
	{
		number: "06",
		name: "Make yourself redundant",
		line: "Train the internal person or install the system. I am too expensive to stay solving the same issue."
	},
	{
		number: "07",
		name: "Control vs. Influence",
		line: "Stop treating things outside your control as if you can control them. Accept objective hazards once the mountain is chosen."
	}
];
var OWNED = [
	{
		name: "Acorn",
		role: "Founder & architect",
		impact: "Sovereign AI Chief of Staff for seven-figure founders. Humans orient. Agents execute. Trust is earned.",
		href: "https://buyacorn.com"
	},
	{
		name: "Red Beard Consulting",
		role: "Founder / Fractional COO",
		impact: "High-grade fractional COO talent and systems when a company is not yet ready for a full-time executive at my level.",
		href: "https://redbeardconsulting.com"
	},
	{
		name: "Lenders Online Training",
		role: "Operations / leadership",
		impact: "Credit-analysis training that strengthens the community banks, credit unions, and farm-credit lenders who finance American small businesses.",
		href: "https://lendersonlinetraining.com"
	}
];
var FRACTIONAL = [
	{
		name: "Chang Robotics",
		role: "Chief Marketing Officer",
		impact: "Faith-based Factory 5.0 automation. Re-industrialize the US, raise workers up.",
		href: "https://changrobotics.com",
		related: {
			label: "ReForge Podcast with Matthew Chang",
			href: "https://www.thereforgepodcast.com"
		}
	},
	{
		name: "Aqua Survey Inc.",
		role: "Systems Consultant",
		impact: "Ecotoxicology and on-water survey. I do not do the field science. I build the teams and systems.",
		href: "https://aquasurvey.com"
	},
	{
		name: "Kady Yellow",
		role: "Newest client example",
		impact: "International creative placemaking expert (VP of Placemaking, Downtown Vision / PlacemakingJax). Classic specialist who needs a sustainable business structure."
	}
];
var INVESTOR = [{
	name: "Pharaoh Skincare",
	role: "Investor",
	impact: "Regenerative, animal-based (lard) skincare. Founded by Charles Mayfield.",
	href: "https://pharaoh.life"
}];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5", {
	variants: {
		variant: {
			primary: "bg-ink text-cream hover:bg-ink-soft border border-ink",
			secondary: "bg-transparent text-ink border border-ink/20 hover:border-ink/45 hover:bg-cream-deep",
			gold: "bg-gold text-ink border border-gold hover:bg-gold-deep hover:border-gold-deep",
			ghost: "bg-transparent text-cream border border-cream/25 hover:border-cream/55 hover:bg-cream/5",
			ghostInk: "bg-transparent text-ink border border-transparent hover:bg-cream-deep"
		},
		size: {
			default: "min-h-11 px-5",
			lg: "min-h-12 px-6 text-base",
			sm: "min-h-10 px-4 text-sm"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function NavHref({ hash, className, onClick, children }) {
	if (useRouterState({ select: (s) => s.location.pathname }) === "/") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `#${hash}`,
		className,
		onClick,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		hash,
		className,
		onClick,
		children
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-line bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-cream",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-baseline gap-2 no-underline",
						"aria-label": "Brian Keith — home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold tracking-tight text-ink",
							children: SITE.mark
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs tracking-widest text-muted uppercase sm:inline",
							children: "Brian Keith"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-6 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavHref, {
							hash: item.hash,
							className: "text-sm text-ink/75 transition-colors duration-150 hover:text-ink",
							children: item.label
						}, item.hash))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "gold",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/talk",
									children: "Talk with Brian"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								variant: "gold",
								className: "sm:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/talk",
									children: "Talk"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									strokeWidth: 1.75
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-5",
									strokeWidth: 1.75
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				className: cn("fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-cream lg:hidden", open ? "block" : "hidden"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col px-5 py-4 pb-10",
					"aria-label": "Mobile",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavHref, {
						hash: item.hash,
						onClick: () => setOpen(false),
						className: "flex min-h-12 items-center border-b border-line font-display text-xl text-ink",
						children: item.label
					}, item.hash)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-5",
						variant: "gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/talk",
							onClick: () => setOpen(false),
							children: "Talk with Brian"
						})
					})]
				})
			})
		]
	});
}
function IconX({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.32 10.25 20.4 2h-1.68l-6.14 7.16L7.68 2H2.4l7.42 10.82L2.4 22h1.68l6.49-7.57L16.32 22h5.28l-8.28-11.75Zm-2.3 2.68-.75-1.08L4.68 3.3h2.58l4.82 6.9.75 1.08 6.28 9h-2.58l-5.51-7.35Z" })
	});
}
function IconLinkedIn({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" })
	});
}
function IconYouTube({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.7 12 3.7 12 3.7s-7.5 0-9.38.36A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.3 12 20.3 12 20.3s7.5 0 9.38-.36a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.75 15.57V8.43L15.84 12 9.75 15.57Z" })
	});
}
var SOCIAL_ICONS = {
	X: IconX,
	LinkedIn: IconLinkedIn,
	YouTube: IconYouTube
};
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-medium tracking-tight",
							children: SITE.mark
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-cream/75",
							children: SITE.standFor
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${SITE.email}`,
							className: "mt-5 inline-block text-gold hover:text-cream",
							children: SITE.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-cream/55",
							children: SITE.domain
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-gold uppercase",
					children: "On this page"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `/#${item.hash}`,
						className: "text-sm text-cream/80 hover:text-cream",
						children: item.label
					}) }, item.hash))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-gold uppercase",
						children: "Companies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2",
						children: [COMPANY_LINKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm text-cream/80 hover:text-cream",
							children: item.label
						}) }, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/talk",
							className: "text-sm text-cream/80 hover:text-cream",
							children: "Talk with Brian"
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-center gap-3",
						children: SOCIALS.map((s) => {
							const Icon = SOCIAL_ICONS[s.label];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": s.label,
								className: "inline-flex size-11 items-center justify-center rounded-md border border-cream/15 text-cream/80 transition-colors duration-150 hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
							}, s.href);
						})
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Brian Keith"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I do not sell your email. No tracking cookies on this page." })]
			})
		})]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-12 w-full rounded-md border border-line bg-paper px-4 text-base text-ink placeholder:text-muted shadow-[var(--shadow-border)] transition-[border-color,box-shadow] duration-150", "focus-visible:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40", className),
		...props
	});
}
//#endregion
export { IconX as a, OWNED as c, SOCIALS as d, SiteFooter as f, cn as h, IconLinkedIn as i, PROCESS as l, VALUES as m, FRACTIONAL as n, IconYouTube as o, SiteHeader as p, INVESTOR as r, Input as s, Button as t, SITE as u };
