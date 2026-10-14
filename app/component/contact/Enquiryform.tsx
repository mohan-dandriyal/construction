"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Field from "@/app/component/contact/Field";
import { projectTypes, timelines } from "@/app/utills/Enquiry";

export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
  timeline: string;
};

const empty: EnquiryValues = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  message: "",
  timeline: "",
};

type Errors = Partial<Record<keyof EnquiryValues, string>>;

function validate(v: EnquiryValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[+()\d\s-]{7,}$/.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.projectType) e.projectType = "Please select a project type.";
  if (v.location.trim().length < 2) e.location = "Please enter your city / state.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (10+ characters).";
  return e;
}

/** Default submit: POSTs JSON to /api/enquiry. Pass your own `onSubmit` to change this. */
async function defaultSubmit(values: EnquiryValues) {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error("Request failed");
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function EnquiryForm({
  onSubmit = defaultSubmit,
}: {
  onSubmit?: (values: EnquiryValues) => Promise<void>;
}) {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<EnquiryValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: keyof EnquiryValues) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      await onSubmit(values);
      setValues(empty);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      noValidate
      onSubmit={handleSubmit}
      variants={container}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="rounded-md border border-white/10 bg-[#121c26]/90 p-6 shadow-2xl shadow-black/40 sm:p-9"
    >
      <motion.div variants={item}>
        <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-white">Enquiry Form</h3>
        <p className="mt-3 text-[17px] text-[#b9c0c8]">Tell us a bit about your requirements.</p>
      </motion.div>

      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <motion.div variants={item}>
          <Field id="name" label="Full Name" required placeholder="Your Name" autoComplete="name"
            value={values.name} onChange={set("name")} error={errors.name} />
        </motion.div>
        <motion.div variants={item}>
          <Field id="phone" label="Phone Number" required type="tel" placeholder="+91 98765 43211" autoComplete="tel"
            value={values.phone} onChange={set("phone")} error={errors.phone} />
        </motion.div>

        <motion.div variants={item}>
          <Field id="email" label="Email Address" required type="email" placeholder="you@example.com" autoComplete="email"
            value={values.email} onChange={set("email")} error={errors.email} />
        </motion.div>
        <motion.div variants={item}>
          <Field id="projectType" label="Project Type" required kind="select" placeholder="Select Project Type"
            options={projectTypes} value={values.projectType} onChange={set("projectType")} error={errors.projectType} />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Field id="location" label="Location" required placeholder="City / State" autoComplete="address-level2"
            value={values.location} onChange={set("location")} error={errors.location} />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Field id="message" label="Tell us about your project" required kind="textarea"
            placeholder="Share your requirements, ideas or any specific details..."
            value={values.message} onChange={set("message")} error={errors.message} />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Field id="timeline" label="Preferred Timeline" kind="select" placeholder="Select Timeline"
            options={timelines} value={values.timeline} onChange={set("timeline")} />
        </motion.div>
      </div>

      <motion.div variants={item} className="mt-9">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={reduce ? undefined : { scale: 1.015 }}
          whileTap={reduce ? undefined : { scale: 0.985 }}
          className="group flex w-full items-center justify-center gap-3 rounded-sm bg-gradient-to-r from-[#c8964a] via-[#dcaa5e] to-[#c8964a] py-5 text-base font-bold uppercase tracking-[0.25em] text-[#14110c] shadow-lg shadow-black/30 transition-[filter] duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a050] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Submit Enquiry"}
          <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
        </motion.button>

        <div aria-live="polite" className="mt-4 min-h-6">
          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[15px] text-[#e0b062]"
              >
                Thank you! Your enquiry has been sent. We’ll get back to you within 24 hours.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[15px] text-red-300"
              >
                Something went wrong. Please try again or call us directly.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.form>
  );
}