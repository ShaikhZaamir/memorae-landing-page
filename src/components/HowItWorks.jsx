import { MessageSquare, Mic, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            step: "01",
            title: "Add Memorae",
            desc: "Save our WhatsApp contact and start chatting instantly",
            icon: <MessageSquare className="w-8 h-8" />,
        },
        {
            step: "02",
            title: "Chat Naturally",
            desc: "Type, voice message, or send photos — communicate your way",
            icon: <Mic className="w-8 h-8" />,
        },
        {
            step: "03",
            title: "Stay Organized",
            desc: "Get reminders, manage tasks, and sync calendars effortlessly",
            icon: <CheckCircle className="w-8 h-8" />,
        },
    ];

    return (
        <section id="how-it-works" className="py-20 px-6 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get Started in
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            {" "}3 Simple Steps
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400">No app downloads, no complicated setup</p>
                </div>

                {/* Step Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((item, idx) => (
                        <div key={idx} className="relative">

                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all group h-full">

                                {/* Number + Icon */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {item.step}
                                    </div>
                                    <div className="text-purple-400 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Title + Description */}
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>

                            {/* Arrow Between Steps (Desktop Only) */}
                            {idx < 2 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 z-10">
                                    <ArrowRight className="absolute -top-2 -right-2 w-5 h-5 text-purple-500" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
