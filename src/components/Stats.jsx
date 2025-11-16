export default function Stats({ stats }) {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="group">

                            {/* Number */}
                            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="text-slate-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
