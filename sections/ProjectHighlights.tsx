"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, MapPin, MousePointerClick, Sun, Fingerprint } from "lucide-react";

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
                        icon={Zap}
                        title="Easy and Apply Fast"
                        description="Streamlined application process designed to get you hired in record time without the usual hassle."
                    />
                    <FeatureCard
                        icon={MapPin}
                        title="Search by Location"
                        description="Easily find jobs in your preferred area. Filter by distance or region to secure work that fits your commute."
                    />
                </motion.div>
            </div>

            {/* Block 3: Design System */}
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
                <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left: Philosophy */}
                        <div className="p-8 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-1 bg-accent rounded-full" />
                                <span className="text-accent font-bold uppercase tracking-widest text-xs">The Philosophy</span>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                Rugged Utility,<br />
                                <span className="text-slate-400">Not Just UI.</span>
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-10">
                                We treat interface design like industrial design. The app is a tool, not a gallery. It must perform under pressure, inside pockets, and in bright sun.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Sun size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Solar-Ready Contrast</h4>
                                        <p className="text-sm text-slate-500 mt-1">Tested for legibility in direct 10,000 lumen sunlight conditions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Fingerprint size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Glove-Friendly Touch</h4>
                                        <p className="text-sm text-slate-500 mt-1">48px+ minimum touch targets to accommodate safety equipment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Visuals */}
                        <div className="p-8 lg:p-16 bg-slate-50 flex flex-col gap-10 justify-center">

                            {/* Colors with meaning */}
                            <div>
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <span className="w-2 h-2 rounded-full bg-primary" /> Functional Palette
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary shadow-inner" />
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Trust Navy</div>
                                            <div className="text-xs text-slate-500">Brand Identity</div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-accent shadow-inner" />
                                        <div>
                                            <div className="font-bold text-slate-900 text-sm">Action Blue</div>
                                            <div className="text-xs text-slate-500">Primary Interaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Typography/UI */}
                            <div>
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <span className="w-2 h-2 rounded-full bg-slate-900" /> Legible UI
                                </h3>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Typeface • Inter</span>
                                        </div>
                                        <div className="text-2xl font-bold text-slate-900 mb-1">Senior Electrician</div>
                                        <div className="text-sm text-slate-500 mb-4">$35/hr • On-site</div>
                                        <button className="w-full py-3 bg-accent text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 text-sm hover:bg-blue-600 transition-colors">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};
