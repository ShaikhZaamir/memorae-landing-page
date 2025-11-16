import React from "react";

export default function FeaturesGrid({ features, activeFeature, setActiveFeature }) {
    return (
        <section id="features" className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Powerful Features,
                        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Simple Experience
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Everything you need to stay organized, right inside WhatsApp
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 cursor-pointer ${activeFeature === idx ? "ring-2 ring-purple-500 scale-105" : ""
                                }`}
                            onMouseEnter={() => setActiveFeature(idx)}
                        >
                            <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-slate-400">{feature.description}</p>

                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
