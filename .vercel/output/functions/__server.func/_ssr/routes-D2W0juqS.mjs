import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as IconX, c as OWNED, d as SOCIALS, f as SiteFooter, h as cn, i as IconLinkedIn, l as PROCESS, m as VALUES, n as FRACTIONAL, o as IconYouTube, p as SiteHeader, r as INVESTOR, s as Input, t as Button, u as SITE } from "./input-zG-g3V9R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2W0juqS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Eyebrow({ children, onDark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-xs font-medium tracking-widest uppercase", onDark ? "text-gold" : "text-gold-ink"),
		children
	});
}
function Section({ id, children, className, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("px-5 py-16 sm:py-20 lg:py-24", dark ? "bg-ink text-cream" : "bg-cream text-ink", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children
		})
	});
}
function ExternalLink({ href, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: cn("inline-flex items-center gap-1 hover:text-gold-deep", className),
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-3.5",
			strokeWidth: 1.75,
			"aria-hidden": "true"
		})]
	});
}
function CompanyCardView({ company, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("flex h-full flex-col rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]", dark && "bg-ink-soft shadow-none ring-1 ring-cream/10"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-gold-ink uppercase",
				children: company.role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display mt-2 text-2xl font-medium tracking-tight",
				children: company.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 flex-1 text-base leading-relaxed", dark ? "text-cream/75" : "text-muted"),
				children: company.impact
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm",
				children: [company.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
					href: company.href,
					className: "font-medium text-ink",
					children: "Visit site"
				}) : null, company.related ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
					href: company.related.href,
					className: "text-muted",
					children: company.related.label
				}) : null]
			})
		]
	});
}
function NewsletterForm({ compact = false }) {
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		if (!email.trim()) return;
		try {
			const existing = JSON.parse(localStorage.getItem("rbk-list") || "[]");
			localStorage.setItem("rbk-list", JSON.stringify([.../* @__PURE__ */ new Set([...existing, email.trim()])]));
		} catch {}
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-md border border-gold/40 bg-cream-deep px-4 py-4 text-ink",
		children: "You’re on the list. The weekly note will start arriving once the list is wired."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: cn("flex w-full flex-col gap-3", !compact && "sm:flex-row"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "list-email",
				children: "Email address"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "list-email",
				type: "email",
				required: true,
				autoComplete: "email",
				placeholder: "Email address",
				value: email,
				onChange: (e) => setEmail(e.target.value),
				className: "sm:flex-1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "sm:w-auto",
				children: "Join the list"
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "hero",
		className: "bg-cream px-5 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "RBK · realbriankeith" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-4 text-display leading-tight font-medium tracking-tight text-ink",
						children: SITE.headline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lede leading-relaxed text-muted",
						children: "Fractional COO • Builder of Acorn (Sovereign AI Chief of Staff) • CMO, Chang Robotics • Systems that give founders their time — and their families — back."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#how-i-work",
									children: ["Work With Me", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										strokeWidth: 1.75
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#connected",
									children: "Join the List"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#socials",
								className: "inline-flex min-h-11 items-center gap-2 px-1 text-sm font-medium text-ink/75 transition-colors duration-150 hover:text-ink",
								children: ["Follow the Journey", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "portrait-frame overflow-hidden rounded-md bg-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/portrait.jpg",
						alt: "Black-and-white portrait of Brian Keith, thoughtful, hand near chin",
						width: 1152,
						height: 1728,
						className: "aspect-[2/3] w-full object-cover object-[center_12%]"
					})
				})
			})]
		})
	});
}
function WhoIAm() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Who I Am" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-section font-medium tracking-tight",
					children: "Two-business-owner family. Then the work of making myself redundant."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-6" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prose-site max-w-2xl text-lede leading-relaxed text-ink/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I grew up in a two-business-owner family. I licked stamps for my mother’s credit-analysis training flyers and cleaned rental houses for my dad. That early immersion in the small-business ethos shaped everything that followed. I studied entrepreneurship, worked at an internet marketing firm, and in 2012 founded Red Beard Consulting. What began as marketing automation on the Keap platform evolved into full-service fractional COO work: everything around the founder’s core offer becomes my problem." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I currently lead 6 companies across roles from COO to CMO to Systems Consultant. I make myself redundant. The goal is never to stay in the middle of the problem." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "secondary",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#manifesto",
							children: ["Read the manifesto", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								strokeWidth: 1.75
							})]
						})
					})
				]
			})]
		})
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "manifesto",
		dark: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				onDark: true,
				children: "Manifesto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-4 max-w-4xl text-section font-medium tracking-tight",
				children: "I stand for manufacturing freedom for American small business owners."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "prose-site mt-10 max-w-3xl text-lede leading-relaxed text-cream/88",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our children will inherit the world we hand them. There is no one coming to save us. If we want that world to be a good place, we have to build it — intentionally, now — with the talents we’ve been given." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The 100-hour-week grind is not sustainable. The absent entrepreneur parent is a failure of a parent, even when the intention was good. I want a world where most entrepreneurs have the real choice to be single-earner families if they want to — more time with their kids, more white space for creativity, less constant firefighting." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I manufacture that freedom in three ways:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-4 border-l border-gold/40 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-cream",
								children: "Acorn"
							}), " puts cutting-edge AI under the founder’s control on their own server. Humans orient. Agents execute. Trust is earned."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-cream",
								children: "Red Beard Consulting"
							}), " supplies high-grade fractional COO talent and systems when a company isn’t yet ready for a full-time executive at my level."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-cream",
								children: "Lenders Online Training"
							}), " strengthens the community banks, credit unions, and farm-credit lenders who actually finance American small businesses."] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8",
						children: "Zone of control versus zone of influence is spiritual work. Most founder worry comes from treating things they cannot control as if they can. We expose the real cost of bringing something into control, run the ROI, and then decide. Objective hazards exist (like icefall on Mount Rainier). Once you’ve chosen the mountain, you don’t waste energy worrying about them. You manage the ones you can."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is how we manufacture freedom — one founder, one system, one white-space afternoon at a time — so the next generation inherits something worth having." })
				]
			})
		]
	});
}
function CoreValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "values",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Core Values" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-section font-medium tracking-tight",
					children: "These five values are the operating system."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Order is the point. They are a sequence, not a set of equals."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-12 divide-y divide-line border-y border-line",
			children: VALUES.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[auto_1fr] gap-5 py-7 sm:gap-8 sm:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl leading-none font-medium text-gold sm:text-4xl",
					children: value.number
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: value.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-base text-muted",
					children: value.line
				})] })]
			}, value.number))
		})]
	});
}
function WhatIDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "work",
		className: "bg-cream-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "What I Do" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 max-w-3xl text-section font-medium tracking-tight",
				children: "Three pillars. One job: manufacture freedom."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 lg:grid-cols-3",
				children: [
					{
						name: "Acorn",
						href: "https://buyacorn.com",
						line: "AI Chief of Staff for seven-figure founders. Runs on the user’s own Amazon server. Slack-native. Flat pricing, no usage meters. Waitlist. I am founder and architect. Humans orient. Agents execute. Trust is earned."
					},
					{
						name: "Red Beard Consulting",
						href: "https://redbeardconsulting.com",
						line: "Fractional COO practice founded 2012. Seven-figure founder-led companies. Your problems are now my problems."
					},
					{
						name: "Lenders Online Training",
						href: "https://lendersonlinetraining.com",
						line: "Credit-analysis training for community banks, credit unions, and farm-credit. Flagship: Tax Return & Financial Statement Analysis."
					}
				].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col rounded-lg bg-paper p-6 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm text-gold-ink",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-3 text-2xl font-medium tracking-tight",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 flex-1 leading-relaxed text-muted",
							children: p.line
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							href: p.href,
							className: "mt-5 font-medium text-ink",
							children: p.href.replace("https://", "")
						})
					]
				}, p.name))
			})
		]
	});
}
function Companies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "companies",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Current Companies & Roles" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 max-w-3xl text-section font-medium tracking-tight",
				children: "Owned. Fractional. Investor."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "RBC, LOT, and Acorn are companies under me. They are not my identity. I am RBK."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-xs font-medium tracking-widest text-gold-ink uppercase",
				children: "Owned"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: OWNED.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyCardView, { company: c }, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-xs font-medium tracking-widest text-gold-ink uppercase",
				children: "Fractional"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: FRACTIONAL.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyCardView, { company: c }, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-12 text-xs font-medium tracking-widest text-gold-ink uppercase",
				children: "Investor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: INVESTOR.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanyCardView, { company: c }, c.name))
			})
		]
	});
}
function PastWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "past",
		className: "bg-cream-deep",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Past Work" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-section font-medium tracking-tight",
				children: "The flagship I am proud of."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-10 max-w-3xl rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-gold-ink uppercase",
						children: "Fractional COO · through early 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display mt-3 text-3xl font-medium tracking-tight",
						children: "Ovadia Heart Health"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-ink/90",
						children: "I helped grow the company from nearly nothing to a seven-figure operation with about 20 staff. Mission: prevent and help people recover from heart attacks through metabolic health. Direct life-saving impact."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						href: "https://ovadiahearthealth.com",
						className: "mt-5 font-medium text-ink",
						children: "ovadiahearthealth.com"
					})
				]
			})
		]
	});
}
function HowIWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "how-i-work",
		dark: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					onDark: true,
					children: "How I Work With Founders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-section font-medium tracking-tight",
					children: "A numbered process. Then I leave."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 divide-y divide-cream/10 border-y border-cream/10",
				children: PROCESS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_1fr] gap-5 py-7 sm:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl leading-none font-medium text-gold",
						children: step.number
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-medium tracking-tight",
						children: step.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-base text-cream/75",
						children: step.line
					})] })]
				}, step.number))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 max-w-2xl text-lede leading-relaxed text-cream/88",
				children: "Success is human: you can see it in their eyes. Reduced late-night worry, presence with family, a shrinking worry window."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "gold",
				size: "lg",
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/talk",
					children: "Talk with Brian"
				})
			})
		]
	});
}
var SOCIAL_ICONS = {
	X: IconX,
	LinkedIn: IconLinkedIn,
	YouTube: IconYouTube
};
function StayConnected() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "connected",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Stay Connected" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-section font-medium tracking-tight",
					children: "A weekly note on systems, AI, and founder freedom."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: "One email a week. No cute name. No daily drip. Join the list — including if you want to be first to know when the book is out."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 max-w-lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: "Book coming — join the list to be first to know."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-gold-ink uppercase",
						children: "Social"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						id: "socials",
						className: "mt-4 space-y-3",
						children: SOCIALS.map((s) => {
							const Icon = SOCIAL_ICONS[s.label];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: s.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex min-h-12 items-center gap-3 text-ink hover:text-gold-deep",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-10 items-center justify-center rounded-md border border-line bg-paper",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: s.handle
								})] })]
							}) }, s.href);
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-gold-ink uppercase",
							children: "Speaking & booking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: "Inquiries and conversations go here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/talk",
								children: "Talk with Brian"
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-gold-ink uppercase",
						children: "Recommended reading"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3",
						children: [
							"Matt Chang,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.amazon.com/Risk-Taking-Biblical-Pursuing-Kingdom-Building/dp/B0FSY88H5Y",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "italic underline decoration-gold/60 underline-offset-4 hover:decoration-gold",
								children: "Risk-Taking is Biblical"
							})
						]
					})] })
				]
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoIAm, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreValues, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatIDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Companies, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PastWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowIWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StayConnected, {})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
