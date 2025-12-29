"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";

const InputField = ({ label, type = "text", placeholder, id }: { label: string, type?: string, placeholder: string, id: string }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-semibold text-white/90 uppercase tracking-wide">{label}</label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        />
    </div>
);

const SelectField = ({ label, options, id }: { label: string, options: string[], id: string }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-semibold text-white/90 uppercase tracking-wide">{label}</label>
        <div className="relative">
            <select
                id={id}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                defaultValue=""
            >
                <option value="" disabled className="bg-slate-800 text-stone-400">Select an option</option>
                {options.map(opt => (
                    <option key={opt} value={opt} className="bg-slate-800 text-white">{opt}</option>
                ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    </div>
);

const TextAreaField = ({ label, placeholder, id }: { label: string, placeholder: string, id: string }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-semibold text-white/90 uppercase tracking-wide">{label}</label>
        <textarea
            id={id}
            rows={4}
            placeholder={placeholder}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
        />
    </div>
);

export const LetsConnect = () => {
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate network request
        setTimeout(() => setIsSent(true), 800);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Let's Build Something Together.</h2>
                            <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
                                I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-stone-600 hover:text-primary transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Mail size={20} className="text-primary" />
                                </div>
                                <span className="font-medium">hello@example.com</span>
                            </a>

                            <div className="pt-8 border-t border-stone-100 flex gap-4">
                                {/* Social Links */}
                                <a href="#" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-primary hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                                    <Github size={24} />
                                </a>
                                <a href="#" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 shadow-sm">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-primary rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden min-h-[500px] flex flex-col justify-center">
                            {/* Background Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                            <AnimatePresence mode="wait">
                                {!isSent ? (
                                    <motion.form
                                        key="contact-form"
                                        initial={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6 relative z-10"
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>

                                        <InputField id="name" label="Name" placeholder="John Doe" />
                                        <InputField id="email" label="Email" type="email" placeholder="john@example.com" />
                                        <SelectField
                                            id="subject"
                                            label="Subject"
                                            options={["Hiring", "Collaboration", "Project Feedback", "Other"]}
                                        />
                                        <TextAreaField id="message" label="Message" placeholder="Tell me about your project..." />

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                variant="secondary"
                                                className="w-full font-bold"
                                            >
                                                Send Message
                                                <Send size={16} className="ml-2" />
                                            </Button>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-message"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className="flex flex-col items-center justify-center text-center space-y-6 text-white h-full relative z-10 py-12"
                                    >
                                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                            <CheckCircle2 size={40} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                                            <p className="text-white/70 max-w-xs mx-auto">
                                                Thanks for reaching out. I'll get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="border-white/30 text-white hover:bg-white/10 mt-4"
                                            onClick={() => setIsSent(false)}
                                        >
                                            Send Another
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
