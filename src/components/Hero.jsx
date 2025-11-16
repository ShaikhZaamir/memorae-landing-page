import { ChevronRight, Play, Zap, MessageSquare, Camera, Mic } from "lucide-react";

export default function Hero({ benefits }) {
    return (
        <section className="relative pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm">
                            <Zap className="w-4 h-4 text-purple-400" />
                            <span>AI-Powered WhatsApp Assistant</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Remember
                            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Everything
                            </span>
                            Without Effort
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed">
                            Your WhatsApp assistant that manages tasks, reminders, and calendars
                            through simple conversations. Voice notes, images, and natural language
                            supported in 100+ languages.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2">
                                Start Free on WhatsApp
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="border border-purple-500/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2">
                                <Play className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* BENEFITS */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                                    <div className="text-purple-400">{benefit.icon}</div>
                                    <span>{benefit.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — PHONE MOCKUP */}
                    <div className="relative">
                        <div className="relative z-10 bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden transform hover:scale-105 transition-transform duration-500">

                            {/* Header */}
                            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">Memorae AI</div>
                                        <div className="text-xs text-green-400 flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                            Online
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="p-6 space-y-4 bg-gradient-to-b from-slate-900 to-slate-950 h-[28rem] overflow-hidden">

                                {/* user message */}
                                <ChatBubbleLeft delay="0s">
                                    🎂 Remind me about mom's birthday next Monday
                                </ChatBubbleLeft>

                                {/* ai reply */}
                                <ChatBubbleRight delay="0.5s">
                                    ✓ Got it! I'll remind you about mom's birthday on Monday, Nov 18 at 9:00 AM
                                </ChatBubbleRight>

                                {/* image message */}
                                <ChatBubbleLeft delay="1s">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Camera className="w-4 h-4" />
                                        <span className="text-xs text-slate-400">Photo</span>
                                    </div>
                                    <div className="w-32 h-24 bg-slate-700 rounded-lg mb-2" />
                                    <p className="text-sm">Create reminder from this recipe</p>
                                </ChatBubbleLeft>

                                {/* image AI reply */}
                                <ChatBubbleRight delay="1.5s">
                                    ✓ Recipe added to your cooking list: "Chocolate Chip Cookies"
                                </ChatBubbleRight>

                                {/* voice note */}
                                <ChatBubbleLeft delay="2s">
                                    <div className="flex items-center gap-2">
                                        <Mic className="w-4 h-4 text-blue-400" />
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div
                                                    key={i}
                                                    className="w-1 bg-blue-400 rounded-full animate-pulse"
                                                    style={{
                                                        height: `${Math.random() * 16 + 8}px`,
                                                        animationDelay: `${i * 0.1}s`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-slate-400">0:03</span>
                                    </div>
                                </ChatBubbleLeft>

                                {/* ai final reply */}
                                <ChatBubbleRight delay="2.5s">
                                    ✓ Reminder set: Team meeting tomorrow at 3pm with recurring weekly pattern
                                </ChatBubbleRight>

                            </div>
                        </div>

                        {/* Floating lights */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
                        <div
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-pulse"
                            style={{ animationDelay: "1s" }}
                        />
                    </div>

                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { 
          animation: fade-in 0.5s ease-out forwards; 
          opacity: 0; 
        }
      `}</style>
        </section>
    );
}

/* Shared bubble components */
const ChatBubbleLeft = ({ children, delay }) => (
    <div
        className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-xs animate-fade-in"
        style={{ animationDelay: delay }}
    >
        {children}
    </div>
);

const ChatBubbleRight = ({ children, delay }) => (
    <div
        className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-none p-4 max-w-xs ml-auto animate-fade-in"
        style={{ animationDelay: delay }}
    >
        <p className="text-sm">{children}</p>
    </div>
);
