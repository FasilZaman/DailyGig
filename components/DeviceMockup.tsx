"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import Image from "next/image";

export const DeviceMockup = () => {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Background Device/Scene */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[90%] h-[90%] md:w-[80%] md:h-[80%] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800"
            >
                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Construction Site"
                    fill
                    className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none" />

                {/* Decorative elements representing a UI interface */}
                <div className="absolute top-4 left-6 right-6 flex justify-between items-center opacity-70">
                    <div className="h-2 w-20 bg-white/30 rounded-full" />
                    <div className="flex space-x-2">
                        <div className="h-2 w-2 bg-white/30 rounded-full" />
                        <div className="h-2 w-2 bg-white/30 rounded-full" />
                    </div>
                </div>
            </motion.div>

            {/* Floating Mobile App Screen Overlay */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.4 } }}
                className="absolute bottom-12 -left-4 md:-left-12 w-64 bg-surface rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 overflow-hidden"
            >
                {/* Mobile App Header */}
                <div className="bg-primary p-4 text-white">
                    <div className="text-xs font-semibold tracking-wider opacity-70 mb-1">RECOMMENDED JOB</div>
                    <div className="font-bold text-lg">Electrician</div>
                </div>

                {/* Mobile App Body */}
                <div className="p-5 space-y-4">
                    <div className="flex items-start space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            <Briefcase size={18} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-foreground">Freelance Project</h4>
                            <p className="text-xs text-stone-500">Commercial Projects</p>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm text-stone-600">
                        <div className="flex items-center space-x-2">
                            <MapPin size={14} className="text-accent" />
                            <span>Calicut, Kerala</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock size={14} className="text-accent" />
                            <span>Full-time • ASAP</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <DollarSign size={14} className="text-accent" />
                            <span className="font-semibold text-foreground">700 - 1200 / day</span>
                        </div>
                    </div>

                    <a href="https://play.google.com/store/apps/details?id=in.dailygigInc.dailygig&hl=en_IN" target="_blank" rel="noopener noreferrer">

                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-2 bg-accent text-white rounded-lg text-sm font-semibold shadow-md hover:bg-blue-600 transition-colors"
                        >
                            Quick Apply
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};
