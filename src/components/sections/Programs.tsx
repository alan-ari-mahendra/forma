"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { programs } from "@/lib/data";

export function Programs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next =
        (index + (e.key === "ArrowRight" ? 1 : -1) + programs.length) %
        programs.length;
      setActive(next);
      tabsRef.current[next]?.focus();
    }
  }

  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow label">Programs</div>
            <h2 className="disp">
              Four ways
              <br />
              to train.
            </h2>
          </div>
          <p>
            Mix any class on an unlimited membership. Most members combine two
            strength sessions with one conditioning and one recovery each week.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Programs">
          {programs.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => { tabsRef.current[i] = el; }}
              className="tab"
              role="tab"
              id={`tab-${p.id}`}
              aria-controls={`panel-${p.id}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {programs.map((p, i) => (
          <div
            key={p.id}
            className="panel"
            role="tabpanel"
            id={`panel-${p.id}`}
            aria-labelledby={`tab-${p.id}`}
            hidden={i !== active}
          >
            <div className="img ph" data-label={`Photo: ${p.label} class`}>
              <Image
                src={p.image.src}
                alt={p.image.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="body">
              <h3 className="disp">{p.title}</h3>
              <div className="meta">
                <div>
                  <small>Duration</small>
                  <b>{p.duration}</b>
                </div>
                <div>
                  <small>Level</small>
                  <b>{p.level}</b>
                </div>
                <div>
                  <small>Intensity</small>
                  <div
                    className="intensity"
                    role="img"
                    aria-label={`Intensity ${p.intensity} of 5`}
                  >
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j} className={j < p.intensity ? "on" : ""} />
                    ))}
                  </div>
                </div>
              </div>
              <p>{p.description}</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#trial" className="btn btn-dark">
                {p.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
