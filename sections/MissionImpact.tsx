"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Quote, Eye, ShieldCheck, Zap, Hammer, Activity } from "lucide-react";
import Image from "next/image";

// --- Components ---

const StaggeredText = ({ text, className, align = "center" }: { text: string, className?: string, align?: "center" | "left" }) => {
    const words = text.split(" ");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <p ref={ref} className={`${className} ${align === "center" ? "text-center" : "text-left"}`}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                    className="inline-block mr-2"
                >
                    {word}
                </motion.span>
            ))}
        </p>
    );
};

interface FeatureCardProps {
    icon: any;
    title: string;
    description: string;
    delay?: number;
    wide?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0, wide = false }: FeatureCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={`relative p-8 rounded-3xl overflow-hidden group border border-slate-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 ${wide ? 'md:col-span-2' : ''}`}
    >
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 opacity-100 z-0" />

        {/* Animated Border Reveal on Hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-10" />

        {/* Inner Content */}
        <div className="relative z-10">
            {/* Icon Container */}
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon size={28} />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
                {description}
            </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
    </motion.div>
);

const RealTimeActivity = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col p-6"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Live Activity</span>
                </div>
                <Activity className="text-slate-500" size={18} />
            </div>

            {/* Map/Data Viz Placeholder */}
            <div className="relative flex-1 bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden mb-4">
                {/* Abstract Map Dots */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-accent rounded-full border-2 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`
                        }}
                    />
                ))}

                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="stroke-white stroke-[0.5]">
                        <path d="M10,50 Q50,10 90,50" fill="none" />
                        <path d="M10,50 Q50,90 90,50" fill="none" />
                        <line x1="50" y1="10" x2="50" y2="90" />
                        <line x1="10" y1="50" x2="90" y2="50" />
                    </svg>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Active Sites</div>
                    <div className="text-2xl font-bold text-white">1,248</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Matches/Hr</div>
                    <div className="text-2xl font-bold text-accent">342</div>
                </div>
            </div>
        </motion.div>
    );
};

const MissionCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto mb-24"
        >
            {/* Mesh Gradient Background */}
            <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 via-sky-500/20 to-primary/20 blur-3xl opacity-50 animate-pulse" />

            {/* Glass Card */}
            <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl text-center overflow-hidden">

                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-8 left-8 lg:left-16 hidden md:flex w-14 h-14 bg-blue-100/50 backdrop-blur-md rounded-full items-center justify-center border border-white/50 shadow-lg text-primary"
                >
                    <Hammer size={24} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-8 right-8 lg:right-16 hidden md:flex w-14 h-14 bg-blue-100/50 backdrop-blur-md rounded-full items-center justify-center border border-white/50 shadow-lg text-primary"
                >
                    <ShieldCheck size={24} />
                </motion.div>

                <div className="relative z-20 max-w-4xl mx-auto">
                    <h2 className="text-accent text-xs font-bold tracking-widest uppercase mb-6 bg-white/40 backdrop-blur-md inline-block px-4 py-1.5 rounded-full border border-white/60 shadow-sm">
                        Our Mission
                    </h2>
                    <StaggeredText
                        text="Built for the hands that build our world. We empower the backbone of our economy with speed, trust, and simplicity."
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-snug tracking-tight"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export const MissionImpact = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

                {/* Premium Glass Mission Card */}
                <MissionCard />

                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <FeatureCard
                        icon={Eye}
                        title="High-Contrast UI"
                        description="Designed for bright sunlight and dusty environments. Large text, bold buttons, and clear actions make it usable on any job site."
                        delay={0.1}
                    />

                    <FeatureCard
                        icon={ShieldCheck}
                        title="Verified Skills"
                        description="Instant authority. Skills are verified via license databases, so your hard-earned qualifications speak for themselves without a resume."
                        delay={0.2}
                    />

                    <FeatureCard
                        icon={Zap}
                        title="Instant Match"
                        description="No ghosting. Our algorithms match workers to sites needing their exact skills right now, reducing downtime to zero."
                        delay={0.3}
                    />

                </div>

            </div>
        </section>
    );
};
