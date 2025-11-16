import { CheckCircle } from "lucide-react";

export default function UseCases({ useCases }) {
    return (
        <section id="use-cases" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Perfect For
                        </span>{" "}
                        Every Lifestyle
                    </h2>
                    <p className="text-xl text-slate-400">From busy professionals to organized families</p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {useCases.map((useCase, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all group"
                        >
                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                                {useCase.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-300 mb-6">{useCase.description}</p>

                            {/* Examples */}
                            <div className="space-y-2">
                                {useCase.examples.map((example, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                        <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                        <span>{example}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
