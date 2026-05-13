export default function Home() {
    return (
        <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">

            {/* HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
                <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg mb-6">
                    TradeConnect<span className="text-blue-300">AI</span>
                </h1>

                <p className="text-3xl font-semibold max-w-3xl mb-4 leading-snug">
                    AI‑Powered Automation for Trades Businesses
                </p>

                <p className="text-lg max-w-2xl text-blue-100 mb-10 leading-relaxed">
                    24/7 AI call answering, instant lead response, automated job booking, invoicing,
                    messaging, and a unified inbox — all built for UK trades.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#pricing"
                        className="px-8 py-4 bg-blue-300 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-200 transition"
                    >
                        Get Early Access
                    </a>
                    <a
                        href="mailto:info@tradeconnectai.co.uk"
                        className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                    >
                        Contact Us
                    </a>
                </div>

                <p className="mt-10 text-blue-200 text-lg opacity-90">Launching soon.</p>
            </section>

            {/* TRUST BADGES */}
            <section className="py-16 px-6 text-center">
                <p className="text-blue-200 mb-6">Built for UK Trades</p>
                <div className="flex flex-wrap justify-center gap-6 opacity-80">
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Plumbers</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Electricians</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Roofers</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Builders</span>
                    <span className="px-4 py-2 bg-white/10 rounded-lg">Landscapers</span>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Everything You Need</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "📞 AI Call Answering",
                            desc: "Human‑sounding AI receptionist that answers calls 24/7."
                        },
                        {
                            title: "💬 Unified AI Inbox",
                            desc: "All messages, leads, and conversations in one place."
                        },
                        {
                            title: "📅 Smart Job Booking",
                            desc: "AI books jobs automatically and updates your calendar."
                        },
                        {
                            title: "📄 Invoicing & Billing",
                            desc: "Create, send, and track invoices with zero admin."
                        },
                        {
                            title: "⚡ Instant Lead Response",
                            desc: "AI replies to every enquiry within seconds."
                        },
                        {
                            title: "🔧 Built for Trades",
                            desc: "Designed specifically for UK trades workflows."
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/10 p-6 rounded-xl backdrop-blur shadow-lg hover:bg-white/20 transition"
                        >
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-blue-100">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-20 px-6 bg-blue-800/40 backdrop-blur">
                <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
                    {[
                        {
                            step: "1",
                            title: "Connect Your Business",
                            desc: "Add your phone number, services, pricing, and availability."
                        },
                        {
                            step: "2",
                            title: "AI Handles Everything",
                            desc: "Calls, messages, bookings, and invoices — all automated."
                        },
                        {
                            step: "3",
                            title: "Grow Without Admin",
                            desc: "More jobs, faster responses, and zero paperwork."
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white/10 rounded-xl shadow-lg">
                            <div className="text-5xl font-extrabold text-blue-300 mb-4">{item.step}</div>
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-blue-100">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRICING */}
            <section id="pricing" className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Starter",
                            price: "£49/mo",
                            features: ["AI Call Answering", "Lead Capture", "Unified Inbox"]
                        },
                        {
                            name: "Pro",
                            price: "£99/mo",
                            features: ["Everything in Starter", "Job Booking", "Invoicing", "Automations"]
                        },
                        {
                            name: "Business",
                            price: "£199/mo",
                            features: ["Full Automation Suite", "Priority Support", "Multi‑Team Access"]
                        }
                    ].map((plan, i) => (
                        <div
                            key={i}
                            className="bg-white/10 p-8 rounded-xl shadow-lg text-center hover:bg-white/20 transition"
                        >
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-4xl font-extrabold text-blue-300 mb-6">{plan.price}</p>

                            <ul className="space-y-2 text-blue-100 mb-6">
                                {plan.features.map((f, idx) => (
                                    <li key={idx}>• {f}</li>
                                ))}
                            </ul>

                            <a
                                href="mailto:info@tradeconnectai.co.uk"
                                className="px-6 py-3 bg-blue-300 text-blue-900 font-bold rounded-lg shadow hover:bg-blue-200 transition"
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 px-6 bg-blue-800/40 backdrop-blur">
                <h2 className="text-4xl font-bold text-center mb-12">What Trades Say</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            quote: "“It answers calls better than I do.”",
                            name: "James — Electrician"
                        },
                        {
                            quote: "“My admin time dropped by 90%.”",
                            name: "Sarah — Plumber"
                        },
                        {
                            quote: "“I’m booking more jobs without lifting a finger.”",
                            name: "Tom — Roofer"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-white/10 p-6 rounded-xl shadow-lg">
                            <p className="text-lg mb-4">{t.quote}</p>
                            <p className="text-blue-200">{t.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
                <p className="text-blue-100 mb-10">Join the early access list today.</p>

                <a
                    href="mailto:info@tradeconnectai.co.uk"
                    className="px-10 py-4 bg-blue-300 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-blue-200 transition"
                >
                    Get Early Access
                </a>
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-blue-200 text-sm">
                © {new Date().getFullYear()} TradeConnectAI. All rights reserved.
            </footer>
        </div>
    );
}
