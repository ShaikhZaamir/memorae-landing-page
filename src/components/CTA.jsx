import { MessageSquare, Play } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center relative overflow-hidden">

                {/* Soft texture background */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgyeiIvPjwvZz48L2c+PC9zdmc+')]"></div>

                {/* Content */}
                <div className="relative z-10">

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Ready to Never Forget Again?
                    </h2>

                    <p className="text-xl mb-8 text-purple-100">
                        Join 50,000+ users saving 3+ hours every week with Memorae
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        {/* Start Free */}
                        <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                            <MessageSquare className="w-5 h-5" />
                            Start Free on WhatsApp
                        </button>

                        {/* Watch Demo */}
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </button>

                    </div>

                    {/* Subtext */}
                    <p className="text-sm text-purple-100 mt-6">
                        No credit card required • 7-day Pro trial • Cancel anytime
                    </p>

                </div>

            </div>
        </section>
    );
}
