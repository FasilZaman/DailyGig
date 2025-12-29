"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Quote, Eye, ShieldCheck, Zap, Hammer } from "lucide-react";
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
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
        className={`bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group ${wide ? 'md:col-span-2' : ''}`}
    >
        {/* Inner Glow Border Beam */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/10 transition-colors duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-accent/5 via-transparent to-primary/5" />

        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed max-w-sm">
            {description}
        </p>
    </motion.div>
);

const ParallaxImage = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group"
        >
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                    alt="Skilled worker hands"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </motion.div>
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent">
                <Quote size={32} className="text-accent mb-4 opacity-90" />
                <p className="text-lg md:text-xl font-medium italic mb-6 leading-relaxed">
                    "Finally, an app that doesn't waste my time. I applied and was on the tools the next morning."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold">M</div>
                    <div>
                        <div className="font-bold">Mike T.</div>
                        <div className="text-xs text-stone-300">Master Electrician</div>
                    </div>
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

                    <div className="row-span-2 lg:col-span-1 h-full">
                        <ParallaxImage />
                    </div>

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
                        wide={true}
                    />

                </div>

            </div>
        </section>
    );
};
