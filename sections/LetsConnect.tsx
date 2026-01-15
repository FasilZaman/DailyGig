"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, MessageSquare, User, AtSign, Tag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clsx } from "clsx";

// --- Styled Components ---

const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
    <label
        htmlFor={htmlFor}
        className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2"
    >
        {children}
    </label>
);

const InputWrapper = ({ children, icon: Icon, isFocused }: { children: React.ReactNode, icon: any, isFocused: boolean }) => (
    <div
        className={clsx(
            "relative flex items-center transition-all duration-300 rounded-lg overflow-hidden border",
            isFocused ? "border-primary ring-2 ring-primary/10 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
        )}
    >
        <div className={clsx(
            "pl-4 pr-3 transition-colors duration-300",
            isFocused ? "text-primary" : "text-slate-400"
        )}>
            <Icon size={18} />
        </div>
        {children}
    </div>
);

const InputField = ({ label, type = "text", placeholder, id, value, onChange, error, icon }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <InputWrapper icon={icon} isFocused={isFocused}>
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className="w-full py-3 pr-4 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 font-medium text-sm"
                />
            </InputWrapper>
            {error && <span className="text-xs text-red-500 mt-1.5 block font-medium flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500" /> {error}
            </span>}
        </div>
    );
};

const SelectField = ({ label, options, id, value, onChange, error, icon }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <InputWrapper icon={icon} isFocused={isFocused}>
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full py-3 pr-4 bg-transparent outline-none text-slate-800 font-medium text-sm appearance-none cursor-pointer"
                >
                    <option value="" disabled className="text-slate-400">Select...</option>
                    {options.map((opt: string) => (
                        <option key={opt} value={opt} className="py-2">{opt}</option>
                    ))}
                </select>
                <div className="absolute right-4 pointer-events-none text-slate-400">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 1L5 5L9 1" />
                    </svg>
                </div>
            </InputWrapper>
            {error && <span className="text-xs text-red-500 mt-1.5 block font-medium">{error}</span>}
        </div>
    );
};

const TextAreaField = ({ label, placeholder, id, value, onChange, error, icon: Icon }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="space-y-1">
            <Label htmlFor={id}>{label}</Label>
            <div
                className={clsx(
                    "relative flex transition-all duration-300 rounded-lg overflow-hidden border",
                    isFocused ? "border-primary ring-2 ring-primary/10 bg-white" : "border-slate-200 bg-white hover:border-slate-300"
                )}
            >
                <div className={clsx(
                    "pl-4 pr-3 pt-3.5 transition-colors duration-300",
                    isFocused ? "text-primary" : "text-slate-400"
                )}>
                    <Icon size={18} />
                </div>
                <textarea
                    id={id}
                    rows={4}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    className="w-full py-3 pr-4 bg-transparent outline-none text-slate-800 placeholder:text-slate-400 font-medium text-sm resize-none"
                />
            </div>
            {error && <span className="text-xs text-red-500 mt-1.5 block font-medium">{error}</span>}
        </div>
    );
};

export const LetsConnect = () => {
    const [isSent, setIsSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.name.trim()) newErrors.name = "Required";
        if (!form.email.trim()) newErrors.email = "Required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
        if (!form.subject) newErrors.subject = "Required";
        if (!form.message.trim()) newErrors.message = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const subject = encodeURIComponent(`${form.subject}: ${form.name}`);
            const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
            window.location.href = `mailto:dailygig.official@gmail.com?subject=${subject}&body=${body}`;
            setTimeout(() => setIsSent(true), 1000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
        if (errors[e.target.id]) setErrors({ ...errors, [e.target.id]: "" });
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8 pt-8 lg:sticky lg:top-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                Let’s start a <br />
                                <span className="text-primary">conversation.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                                Whether you’re looking to hire top talent or partner with us, we’re ready to help you streamline your workflow.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-slate-50 border border-slate-100 p-6 rounded-2xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-900">Email Us Directly</div>
                                    <div className="text-sm text-slate-500">For general inquiries</div>
                                </div>
                            </div>
                            <a
                                href="mailto:dailygig.official@gmail.com"
                                className="text-lg font-bold text-primary hover:text-blue-700 transition-colors"
                            >
                                dailygig.official@gmail.com
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="bg-white p-1">
                            <AnimatePresence mode="wait">
                                {!isSent ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                id="name"
                                                label="Full Name"
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={handleChange}
                                                error={errors.name}
                                                icon={User}
                                            />
                                            <SelectField
                                                id="subject"
                                                label="Inquiry Type"
                                                options={["Hiring", "Partnership", "Support", "Other"]}
                                                value={form.subject}
                                                onChange={handleChange}
                                                error={errors.subject}
                                                icon={Tag}
                                            />
                                        </div>

                                        <InputField
                                            id="email"
                                            label="Work Email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            error={errors.email}
                                            icon={AtSign}
                                        />

                                        <TextAreaField
                                            id="message"
                                            label="Message"
                                            placeholder="How can we help you?"
                                            value={form.message}
                                            onChange={handleChange}
                                            error={errors.message}
                                            icon={MessageSquare}
                                        />

                                        <div className="pt-4">
                                            <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-slate-900 transition-colors">
                                                <span>Send Message</span>
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50"
                                    >
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received</h3>
                                        <p className="text-slate-500 max-w-xs mx-auto mb-6">
                                            Thank you for contacting DailyGig. Our team will review your message and get back to you shortly.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSent(false)}
                                            className="bg-white"
                                        >
                                            Send Another Message
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
