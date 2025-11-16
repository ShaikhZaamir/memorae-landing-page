import React from "react";

export default function AdvancedFeatures({ advancedFeatures }) {
    return (
        <section className="px-6 relative">
            <div className="max-w-7xl mx-auto">

                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12">

                    {/* Heading */}
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Advanced Capabilities
                        </span>
                    </h3>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {advancedFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">

                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    {React.cloneElement(feature.icon, { className: "w-5 h-5 text-purple-400" })}
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                                    <p className="text-sm text-slate-400">{feature.description}</p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
