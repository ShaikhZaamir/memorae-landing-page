import React from "react";

export default function Background({ scrollY }) {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

            {/* Top-left purple orb */}
            <div
                className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            />

            {/* Bottom-right blue orb */}
            <div
                className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
            />

            {/* Center pink orb */}
            <div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
                style={{
                    transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`,
                }}
            />
        </div>
    );
}
