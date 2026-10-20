"use client";

import { useState, useRef, type FormEvent } from "react";
import Image from "next/image";
import { trialGoals } from "@/lib/data";

export function Trial() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = formRef.current!;
    const required = Array.from(
      form.querySelectorAll<HTMLInputElement>("[required]"),
    );
    const newErrors: Record<string, boolean> = {};
    let ok = true;

    for (const input of required) {
      const bad =
        !input.value.trim() ||
        (input.type === "email" && !/^\S+@\S+\.\S+$/.test(input.value));
      newErrors[input.name] = bad;
      if (bad) ok = false;
    }

    setErrors(newErrors);

    if (ok) {
      setSubmitted(true);
    } else {
      const firstError = required.find((i) => newErrors[i.name]);
      firstError?.focus();
    }
  }

  return (
    <section className="trial" id="trial">
      <div className="left">
        <div
          className="ph"
          data-label="Photo: group class high-five / community moment"
        >
          <Image
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1400&q=80"
            alt="Member training with kettlebells in a group class"
            fill
            sizes="(max-width: 1080px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="inner">
          <div className="label" style={{ color: "var(--volt)" }}>
            Free trial week
          </div>
          <h2 className="disp" style={{ marginTop: 14 }}>
            Your first
            <br />
            week is
            <br />
            on us.
          </h2>
          <p>
            Seven days, unlimited classes, a coach-led onboarding. If it is not
            for you, you walk away. No card, no catch.
          </p>
        </div>
      </div>
      <div className="right">
        <form ref={formRef} noValidate onSubmit={handleSubmit}>
          <h3>Book your free week</h3>
          <p>
            A coach will text you within 2 hours to confirm your first class.
          </p>
          <div className="f2">
            <div className="field">
              <label htmlFor="fn">First name</label>
              <input
                id="fn"
                name="fn"
                autoComplete="given-name"
                required
                aria-invalid={errors.fn || undefined}
                style={errors.fn ? { borderColor: "#B3261E" } : undefined}
              />
            </div>
            <div className="field">
              <label htmlFor="ln">Last name</label>
              <input
                id="ln"
                name="ln"
                autoComplete="family-name"
                required
                aria-invalid={errors.ln || undefined}
                style={errors.ln ? { borderColor: "#B3261E" } : undefined}
              />
            </div>
          </div>
          <div className="f2">
            <div className="field">
              <label htmlFor="em">Email</label>
              <input
                id="em"
                name="em"
                type="email"
                autoComplete="email"
                required
                aria-invalid={errors.em || undefined}
                style={errors.em ? { borderColor: "#B3261E" } : undefined}
              />
            </div>
            <div className="field">
              <label htmlFor="ph">Phone</label>
              <input
                id="ph"
                name="ph"
                type="tel"
                autoComplete="tel"
                required
                aria-invalid={errors.ph || undefined}
                style={errors.ph ? { borderColor: "#B3261E" } : undefined}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="goal">Main goal</label>
            <select id="goal" name="goal">
              {trialGoals.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <fieldset className="field">
            <legend>Preferred time</legend>
            <div className="times">
              <label>
                <input type="radio" name="time" value="morning" defaultChecked />
                <span>
                  Morning
                  <small>5:30 to 9 AM</small>
                </span>
              </label>
              <label>
                <input type="radio" name="time" value="midday" />
                <span>
                  Midday
                  <small>11 AM to 2 PM</small>
                </span>
              </label>
              <label>
                <input type="radio" name="time" value="evening" />
                <span>
                  Evening
                  <small>5 to 8 PM</small>
                </span>
              </label>
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn btn-dark"
            disabled={submitted}
          >
            Claim my free week
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <div className="note">
            <span>&#10003; No card required</span>
            <span>&#10003; No auto-renewal</span>
            <span>&#10003; Cancel anytime</span>
          </div>
          <div
            className={`form-ok${submitted ? " show" : ""}`}
            role="status"
          >
            You are in. A coach will text you shortly to book your first class.
          </div>
        </form>
      </div>
    </section>
  );
}
