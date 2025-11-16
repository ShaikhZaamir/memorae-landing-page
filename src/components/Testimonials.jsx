import { Star } from "lucide-react";
import React from "react";

export default function Testimonials({
    testimonials,
    activeTestimonial,
    setActiveTestimonial,
}) {
    return (
        <section className="py-20 px-6 bg-slate-900/30">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Loved by
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {" "}Thousands
                        </span>
                    </h2>
                </div>

                {/* Testimonials Container */}
                <div className="relative">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className={`transition-all duration-500 ${idx === activeTestimonial
                                    ? "opacity-100 relative"
                                    : "opacity-0 absolute inset-0"
                                }`}
                        >
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700">

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-xl text-slate-200 mb-6 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                {/* User Info */}
                                <div>
                                    <div className="font-bold text-lg">{testimonial.name}</div>
                                    <div className="text-purple-400">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTestimonial(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === activeTestimonial ? "bg-purple-500 w-8" : "bg-slate-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
