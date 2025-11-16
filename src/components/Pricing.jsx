import { CheckCircle } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Simple, Transparent
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Pricing
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400">Start free, upgrade when you need more</p>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* FREE PLAN */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:scale-105 transition-transform">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Free</h3>
                            <p className="text-slate-400 text-sm">Perfect for getting started</p>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <span className="text-5xl font-bold">$0</span>
                            <span className="text-slate-400">/month</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8">
                            {[
                                "Basic reminders & tasks",
                                "Simple list management",
                                "Limited calendar sync",
                                "Voice notes supported",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="w-full border border-purple-500/50 px-6 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition-all">
                            Start Free
                        </button>
                    </div>

                    {/* PRO PLAN */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500 rounded-2xl p-8 relative overflow-hidden hover:scale-105 transition-transform">

                        {/* Badge */}
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Pro</h3>
                            <p className="text-slate-300 text-sm">For power users & teams</p>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <span className="text-5xl font-bold">$2.99</span>
                            <span className="text-slate-400">/month</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                <span className="font-semibold">Everything in Free, plus:</span>
                            </li>

                            {[
                                "Unlimited reminders & tasks",
                                "Full Google Calendar integration",
                                "Image recognition for tasks",
                                "Recurring reminders (complex patterns)",
                                "Team reminders & collaboration",
                                "ChatGPT integration",
                                "Advanced dashboard & analytics",
                                "Priority support",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                            Upgrade to Pro
                        </button>
                    </div>
                </div>

                {/* Subtext */}
                <p className="text-center text-slate-400 mt-8 text-sm">
                    Try Pro free for 7 days • Cancel anytime • No credit card required
                </p>

            </div>
        </section>
    );
}
