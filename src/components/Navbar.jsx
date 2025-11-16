import { MessageSquare, Menu, X } from "lucide-react";

export default function Navbar({ scrollY, mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? "bg-slate-900/80 backdrop-blur-lg shadow-lg" : ""
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Memorae
                    </span>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#features" text="Features" />
                    <NavLink href="#how-it-works" text="How It Works" />
                    <NavLink href="#use-cases" text="Use Cases" />
                    <NavLink href="#pricing" text="Pricing" />

                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                        Get Started Free
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && <MobileMenu />}
        </nav>
    );
}

const NavLink = ({ href, text }) => (
    <a href={href} className="hover:text-purple-400 transition-colors">
        {text}
    </a>
);

const MobileMenu = () => (
    <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-purple-500/20">
        <div className="px-6 py-4 flex flex-col gap-4">
            <NavLink href="#features" text="Features" />
            <NavLink href="#how-it-works" text="How It Works" />
            <NavLink href="#use-cases" text="Use Cases" />
            <NavLink href="#pricing" text="Pricing" />

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-semibold">
                Get Started Free
            </button>
        </div>
    </div>
);
