import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as SiteFooter, p as SiteHeader, s as Input, t as Button, u as SITE } from "./input-zG-g3V9R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talk-D8x2ZI-a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TalkPage() {
	const [done, setDone] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		if (!name.trim() || !email.trim()) return;
		try {
			const payload = {
				name: name.trim(),
				email: email.trim(),
				company: company.trim(),
				message: message.trim(),
				at: (/* @__PURE__ */ new Date()).toISOString()
			};
			const existing = JSON.parse(localStorage.getItem("rbk-talk") || "[]");
			localStorage.setItem("rbk-talk", JSON.stringify([...existing, payload]));
		} catch {}
		setDone(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "main",
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-gold-ink uppercase",
					children: "Talk with Brian"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-4 text-display leading-tight font-medium tracking-tight",
					children: "If the constraint is real and the timing is now, let’s talk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-rule mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "prose-site mt-8 max-w-xl text-lede leading-relaxed text-ink/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I work with seven-figure founder-led companies on systems, fractional COO work, and Acorn. I also take speaking inquiries." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Winning has to include more time with family. If that is not on the table, we are not a fit." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted",
					children: [
						"Prefer email?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${SITE.email}`,
							className: "text-ink underline decoration-gold/60 underline-offset-4",
							children: SITE.email
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "how-i-work",
						className: "text-sm text-muted hover:text-ink",
						children: "← How I work with founders"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium",
						children: "Got it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted",
						children: [
							"I’ll be in touch at ",
							email,
							". If it’s urgent, write me directly at ",
							SITE.email,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6",
						variant: "secondary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Back to the page"
						})
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "talk-name",
							className: "mb-1.5 block text-sm font-medium",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "talk-name",
							required: true,
							autoComplete: "name",
							value: name,
							onChange: (e) => setName(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "talk-email",
							className: "mb-1.5 block text-sm font-medium",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "talk-email",
							type: "email",
							required: true,
							autoComplete: "email",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "talk-company",
							className: "mb-1.5 block text-sm font-medium",
							children: ["Company ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal text-muted",
								children: "(optional)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "talk-company",
							autoComplete: "organization",
							value: company,
							onChange: (e) => setCompany(e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "talk-message",
							className: "mb-1.5 block text-sm font-medium",
							children: "What we should talk about"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "talk-message",
							rows: 5,
							value: message,
							onChange: (e) => setMessage(e.target.value),
							className: "flex w-full rounded-md border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted shadow-[var(--shadow-border)] transition-[border-color,box-shadow] duration-150 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:outline-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full sm:w-auto",
							children: "Request a conversation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Front-end for now. I will not sell your address."
						})
					]
				})
			})]
		})
	});
}
function Talk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalkPage, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Talk as component };
