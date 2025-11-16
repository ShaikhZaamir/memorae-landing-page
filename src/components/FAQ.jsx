import { ChevronRight } from "lucide-react";

export default function FAQ({ faqs }) {
    return (
        <section className="py-20 px-6 bg-slate-900/30">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all group"
                        >
                            <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between">
                                {faq.q}
                                <ChevronRight className="w-5 h-5 text-purple-400 group-open:rotate-90 transition-transform" />
                            </summary>

                            <p className="text-slate-400 mt-4 leading-relaxed">{faq.a}</p>
                        </details>
                    ))}
                </div>

                {/* Remove triangle marker on summary */}
                <style>{`
          details summary::-webkit-details-marker {
            display: none;
          }
        `}</style>

            </div>
        </section>
    );
}
