
"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { User, Mail, FileText, PhoneCall, MessageSquareText } from "lucide-react";
import FormField from "@/app/component/contact/Formfield";

export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
};

const empty: ContactValues = { name: "", email: "", subject: "", phone: "", message: "" };

type Errors = Partial<Record<keyof ContactValues, string>>;

function validate(v: ContactValues): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Please enter a valid email.";
  if (v.subject.trim().length < 2) e.subject = "Please enter a subject.";
  if (v.phone.trim() && !/^[+()\d\s-]{7,}$/.test(v.phone.trim()))
    e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Please write at least 10 characters.";
  return e;
}

/** Default submit: POSTs JSON to /api/contact. Pass your own `onSubmit` to change this. */
async function defaultSubmit(values: ContactValues) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error("Request failed");
}

const fieldsContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const fieldItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactForm({
  onSubmit = defaultSubmit,
}: {
  onSubmit?: (values: ContactValues) => Promise<void>;
}) {
  const reduce = useReducedMotion();
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: keyof ContactValues) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setStatus("idle");
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
      variants={fieldsContainer}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-10 grid gap-5 sm:grid-cols-2"
    >
      <motion.div variants={fieldItem}>
        <FormField id="name" label="Name" icon={User} placeholder="Enter Name" autoComplete="name"
          value={values.name} onChange={set("name")} error={errors.name} />
      </motion.div>

      <motion.div variants={fieldItem}>
        <FormField id="email" label="Email" icon={Mail} type="email" placeholder="Enter Email" autoComplete="email"
          value={values.email} onChange={set("email")} error={errors.email} />
      </motion.div>

      <motion.div variants={fieldItem}>
        <FormField id="phone" label="Phone" icon={PhoneCall} type="tel" placeholder="Enter Phone" autoComplete="tel"
          value={values.phone} onChange={set("phone")} error={errors.phone} />
      </motion.div>

      <motion.div variants={fieldItem}>
        <FormField id="subject" label="Subject" icon={FileText} placeholder="Project Type"
          value={values.subject} onChange={set("subject")} error={errors.subject} />
      </motion.div>

      <motion.div variants={fieldItem}>
        <FormField id="subject" label="Subject" icon={FileText} placeholder="Project Type"
          value={values.subject} onChange={set("subject")} error={errors.subject} />
      </motion.div>

      <motion.div variants={fieldItem} className="sm:col-span-2">
        <FormField id="message" label="Message" icon={MessageSquareText} placeholder="Enter Message" multiline
          value={values.message} onChange={set("message")} error={errors.message} />
      </motion.div>

      {/* buttons */}
      <motion.div variants={fieldItem} className="flex flex-wrap gap-4 sm:col-span-2">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="min-w-[200px] bg-[#d4a050] px-8 py-5 font-[family-name:var(--font-cond)] text-lg font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#e0b062] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a050] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        <motion.button
          type="button"
          onClick={reset}
          whileHover={reduce ? undefined : { scale: 1.03 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
          className="min-w-[130px] border border-[#d4a050] px-8 py-5 font-[family-name:var(--font-cond)] text-lg font-semibold uppercase tracking-[0.2em] text-[#d4a050] transition-colors duration-300 hover:bg-[#d4a050]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a050]"
        >
          Reset
        </motion.button>
      </motion.div>

      {/* status message */}
      <div aria-live="polite" className="sm:col-span-2">
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[15px] text-[#e0b062]"
            >
              Thank you! Your message has been sent. We’ll get back to you soon.
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
    </motion.form>
  );
}