import React, { useEffect, useState } from "react";

/* Components */
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import FeaturesGrid from "../components/FeaturesGrid";
import AdvancedFeatures from "../components/AdvancedFeatures";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

/* Data */
import { features } from "../data/features";
import { advancedFeatures } from "../data/advancedFeatures";
import { benefits } from "../data/benefits";
import { faqs } from "../data/faqs";
import { useCases } from "../data/useCases";
import { testimonials } from "../data/testimonials";
import { stats } from "../data/stats";

export default function MemoraeHome() {
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">

            <Background scrollY={scrollY} />
            <Navbar
                scrollY={scrollY}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />
            <Hero benefits={benefits} />
            <FeaturesGrid
                features={features}
                activeFeature={activeFeature}
                setActiveFeature={setActiveFeature}
            />
            <AdvancedFeatures advancedFeatures={advancedFeatures} />
            <HowItWorks />
            <UseCases useCases={useCases} />
            <Testimonials
                testimonials={testimonials}
                activeTestimonial={activeTestimonial}
                setActiveTestimonial={setActiveTestimonial}
            />
            <Pricing />
            <FAQ faqs={faqs} />
            <Stats stats={stats} />
            <CTA />
            <Footer />

        </div>
    );
}
