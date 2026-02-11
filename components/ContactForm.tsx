"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  service: string;
  budget: string;
  description: string;
};

const budgets = ["$2k-$5k", "$5k-$10k", "$10k-$25k", "$25k+", "Not sure yet"];
const services = [
  "Website Development",
  "API Engineering",
  "Automation & Scripts",
  "Product Build Sprint",
  "Something else"
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, timestamp: new Date().toISOString() })
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan"
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-magenta">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" }
            })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan"
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-xs text-magenta">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/50">Service</label>
          <select
            {...register("service", { required: "Select a service" })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-xs text-magenta">{errors.service.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-white/50">Budget</label>
          <select
            {...register("budget", { required: "Select a budget" })}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan"
            defaultValue=""
          >
            <option value="" disabled>
              Choose a range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.budget && <p className="text-xs text-magenta">{errors.budget.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-white/50">Project details</label>
        <textarea
          {...register("description", { required: "Tell us about the project" })}
          className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan"
          placeholder="Timeline, goals, key features, integrations..."
        />
        {errors.description && <p className="text-xs text-magenta">{errors.description.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="gradient-border rounded-full px-6 py-3 text-sm font-semibold text-white hover:shadow-glow disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send quote"}
        </button>
        {status === "success" && <p className="text-sm text-lime">Request sent. We'll get back within 24 hours.</p>}
        {status === "error" && <p className="text-sm text-magenta">Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
