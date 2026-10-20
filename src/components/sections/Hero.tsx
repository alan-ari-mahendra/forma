import Image from "next/image";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="bg ph" data-label="Hero photo / video: athlete mid-lift, dark moody gym">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
          alt="Athlete performing a heavy barbell lift in a dark training gym"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="wrap hero-inner">
        <div className="label" style={{ color: "var(--volt)" }}>
          Boutique training club &middot; East Austin
        </div>
        <h1 className="disp" style={{ marginTop: 18 }}>
          Train with <em>intent.</em>
        </h1>
        <div className="hero-row">
          <p>
            Coached strength, conditioning and boxing classes capped at 14
            people. Real programming, real coaching, no crowded floor.
          </p>
          <div className="ctas">
            <a href="#trial" className="btn btn-volt">
              Book Free Trial
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#schedule" className="btn btn-line-l">
              View Schedule
            </a>
          </div>
        </div>
        <div className="hero-stats">
          {heroStats.map((stat) => (
            <div key={stat.value}>
              <b>{stat.value}</b>
              <small>
                {stat.stars && (
                  <span className="stars" aria-hidden="true">
                    ★★★★★
                  </span>
                )}{" "}
                {stat.label}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
