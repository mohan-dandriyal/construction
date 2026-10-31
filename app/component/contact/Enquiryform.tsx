"use client";

import { useState, type FormEvent } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Field from "@/app/component/contact/Field";
import { formContent, projectTypes, timelines } from "@/app/utills/Enquiry";

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
  const { fields } = formContent;
  if (v.name.trim().length < 2) e.name = fields.name.error;
  if (!/^[+()\d\s-]{7,}$/.test(v.phone.trim())) e.phone = fields.phone.error;
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = fields.email.error;
  if (!v.projectType) e.projectType = fields.projectType.error;
  if (v.location.trim().length < 2) e.location = fields.location.error;
  if (v.message.trim().length < 10) e.message = fields.message.error;
  return e;
}

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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

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

  const { fields } = formContent;

  return (
    <motion.form
      noValidate
      onSubmit={handleSubmit}
      variants={container}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="rounded-md border border-white/10 bg-[#121c26]/90 p-5 shadow-2xl shadow-black/40 sm:p-9"
    >
      <motion.div variants={item}>
        <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-white sm:tracking-[0.35em]">
          {formContent.title}
        </h3>
        <p className="mt-3 text-base text-[#b9c0c8] sm:text-[17px]">
          {formContent.description}
        </p>
      </motion.div>

      <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <motion.div variants={item}>
          <Field
            id="name"
            label={fields.name.label}
            required
            placeholder={fields.name.placeholder}
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            error={errors.name}
          />
        </motion.div>
        <motion.div variants={item}>
          <Field
            id="phone"
            label={fields.phone.label}
            required
            type="tel"
            placeholder={fields.phone.placeholder}
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            error={errors.phone}
          />
        </motion.div>

        <motion.div variants={item}>
          <Field
            id="email"
            label={fields.email.label}
            required
            type="email"
            placeholder={fields.email.placeholder}
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            error={errors.email}
          />
        </motion.div>
        <motion.div variants={item}>
          <Field
            id="projectType"
            label={fields.projectType.label}
            required
            kind="select"
            placeholder={fields.projectType.placeholder}
            options={projectTypes}
            value={values.projectType}
            onChange={set("projectType")}
            error={errors.projectType}
          />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Field
            id="location"
            label={fields.location.label}
            required
            placeholder={fields.location.placeholder}
            autoComplete="address-level2"
            value={values.location}
            onChange={set("location")}
            error={errors.location}
          />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Field
            id="message"
            label={fields.message.label}
            required
            kind="textarea"
            placeholder={fields.message.placeholder}
            value={values.message}
            onChange={set("message")}
            error={errors.message}
          />
        </motion.div>

        <motion.div variants={item} className="sm:col-span-2">
          <Field
            id="timeline"
            label={fields.timeline.label}
            kind="select"
            placeholder={fields.timeline.placeholder}
            options={timelines}
            value={values.timeline}
            onChange={set("timeline")}
          />
        </motion.div>
      </div>

      <motion.div variants={item} className="mt-9">
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={reduce ? undefined : { scale: 1.015 }}
          whileTap={reduce ? undefined : { scale: 0.985 }}
          className="group flex w-full items-center justify-center gap-3 rounded-sm bg-gradient-to-r from-[#c8964a] via-[#dcaa5e] to-[#c8964a] py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#14110c] shadow-lg shadow-black/30 transition-[filter] duration-300 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a050] disabled:cursor-wait disabled:opacity-70 sm:py-5 sm:text-base sm:tracking-[0.25em]"
        >
          {status === "sending"
            ? formContent.sendingButton
            : formContent.submitButton}
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          />
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
                {formContent.successMessage}
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[15px] text-red-300"
              >
                {formContent.errorMessage}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.form>
  );
}
