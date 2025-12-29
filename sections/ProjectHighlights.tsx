"use client";

import React from "react";
import { motion } from "framer-motion";
import { TouchpadOff, BadgeCheck, MapPin, MousePointerClick } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
        }}
        className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
    >
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
            <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
);

const ColorSwatch = ({ color, name, hex }: { color: string, name: string, hex: string }) => (
    <div className="flex flex-col gap-2">
        <div className={`w-full h-24 rounded-lg shadow-sm ${color}`} />
        <div>
            <div className="font-semibold text-sm text-foreground">{name}</div>
            <div className="text-xs text-stone-500 font-mono">{hex}</div>
        </div>
    </div>
)

export const ProjectHighlights = () => {
    return (
        <section className="py-24 space-y-24">

            {/* Block 1: The Problem */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                className="container mx-auto px-4 lg:px-8"
            >
                <div className="bg-slate-900 rounded-3xl p-8 lg:p-16 text-center lg:text-left overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 max-w-4xl mx-auto lg:mx-0">
                        <h2 className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm">The Problem</h2>
                        <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            The Blue-Collar Job Market is <span className="text-stone-400">Broken.</span>
                        </h3>
                        <p className="text-lg lg:text-xl text-stone-300 leading-relaxed max-w-2xl">
                            Traditional job boards are designed for desk workers. Complex resumes, lengthy cover letters, and slow response times don't work for skilled tradespeople who need immediate placement.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Block 2: The Solution */}
            <div className="container mx-auto px-4 lg:px-8 bg-surface">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <div className="md:col-span-3 mb-4 text-center">
                        <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-3xl font-bold text-foreground">
                            The Solution
                        </motion.h2>
                    </div>

                    <FeatureCard
                        icon={MousePointerClick}
                        title="One-Tap Apply"
                        description="No more resumes. Workers build a profile once and apply to jobs instantly with a single verified tap."
                    />
                    <FeatureCard
                        icon={BadgeCheck}
                        title="Verified Certifications"
                        description="Automated license verification ensures safety and compliance, building immediate trust with employers."
                    />
                    <FeatureCard
                        icon={MapPin}
                        title="Geo-Location Jobs"
                        description="Real-time location matching connects workers with sites nearby, reducing commute times and logistical headaches."
                    />
                </motion.div>
            </div>

            {/* Block 3: Design System */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                className="container mx-auto px-4 lg:px-8"
            >
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/3">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Design System</h2>
                            <p className="text-stone-600 mb-6">
                                A rugged yet professional aesthetic reflecting the industry. High contrast for outdoor visibility, with "Safety Blue" accents.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Typography</div>
                                    <div className="text-4xl font-sans font-bold text-foreground mb-1">Inter</div>
                                    <div className="text-stone-500">The primary typeface, chosen for its legibility and modern industrial feel.</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                            <ColorSwatch color="bg-primary" name="Deep Navy" hex="#1e3a8a" />
                            <ColorSwatch color="bg-accent" name="Pro Blue" hex="#3b82f6" />
                            <ColorSwatch color="bg-slate-900" name="Dark Slate" hex="#0f172a" />
                            <ColorSwatch color="bg-stone-100 border border-stone-200" name="Stone White" hex="#f5f5f4" />
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};
