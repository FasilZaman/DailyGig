"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DeviceMockup } from "@/components/DeviceMockup";
import { PlayCircle, Download } from "lucide-react";

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32 bg-surface">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
                                <motion.span
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-[#60a5fa] to-[#1e3a8a] bg-[length:200%_auto]"
                                    animate={{
                                        backgroundPosition: ["200% center", "0% center"],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                                        opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                >
                                    Daily Gig
                                </motion.span>
                                : Revolutionizing <span className="text-accent">Blue-Collar Recruitment.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed max-w-lg"
                        >
                            A job portal focused on connecting skilled tradespeople with top-tier employers.
                            Streamlined, efficient, and built for the modern workforce.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="https://play.google.com/store/apps/details?id=in.dailygigInc.dailygig&hl=en_IN" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="group">
                                    Download App
                                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                                </Button>
                            </a>
                            {/* <Button variant="outline" size="lg" className="group">
                                <PlayCircle className="mr-2 h-5 w-5" />
                                Live Demo
                            </Button> */}
                        </motion.div>

                        {/* Trust Badges or extra info could go here */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-8 text-stone-400 grayscale"
                        >
                            {/* Placeholders for logos if needed in future */}
                            <span className="font-bold text-sm tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
                        </motion.div>
                    </div>

                    {/* Right Side: Device Mockup */}
                    <div className="relative">
                        <DeviceMockup />
                    </div>

                </div>
            </div>
        </section>
    );
};
