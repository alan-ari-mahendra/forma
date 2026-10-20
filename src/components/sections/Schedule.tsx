"use client";

import { useState } from "react";
import {
  scheduleDays,
  weekdayClasses,
  weekendClasses,
  programFilters,
} from "@/lib/data";

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [filter, setFilter] = useState("all");

  const classes = (activeDay >= 5 ? weekendClasses : weekdayClasses).filter(
    (c) => filter === "all" || c.program === filter,
  );

  return (
    <section className="schedule" id="schedule">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow label">Weekly schedule</div>
            <h2 className="disp">
              Find your
              <br />
              class.
            </h2>
          </div>
          <p>
            Classes run from 5:30 AM. Book up to 7 days ahead in the FORMA app.
            Spots update in real time.
          </p>
        </div>

        <div className="sched-bar">
          <div className="days" role="group" aria-label="Select day">
            {scheduleDays.map((d, i) => (
              <button
                key={d.short}
                type="button"
                className="day"
                aria-pressed={i === activeDay}
                aria-label={`${d.short} ${d.date}, October`}
                onClick={() => setActiveDay(i)}
              >
                <small>{d.short}</small>
                <span>{d.date}</span>
              </button>
            ))}
          </div>
          <div className="chips" role="group" aria-label="Filter by program">
            {programFilters.map((f) => (
              <button
                key={f}
                type="button"
                className="chip"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : f}
              </button>
            ))}
          </div>
        </div>

        <div className="sched" aria-live="polite">
          <div className="sched-row head">
            <span>Time</span>
            <span>Class</span>
            <span className="h-coach">Coach</span>
            <span className="h-spots">Spots</span>
            <span />
          </div>
          {classes.length === 0 ? (
            <div className="empty">
              No {filter === "all" ? "" : filter + " "}classes on this day. Try
              another day.
            </div>
          ) : (
            classes.map((c, i) => {
              const full = c.spots === 0;
              const low = c.spots > 0 && c.spots <= 3;
              return (
                <div key={i} className="sched-row">
                  <div className="time">
                    {c.time}
                    <small>
                      {c.period} &middot; {c.duration} min
                    </small>
                  </div>
                  <div className="cls">
                    <b>{c.name}</b>
                    <span className="tag">{c.program}</span>
                  </div>
                  <div className="coach">
                    <span />
                    {c.coach}
                  </div>
                  <div className={`spots${low ? " low" : ""}`}>
                    {full ? (
                      <b>Full</b>
                    ) : (
                      <>
                        <b>{c.spots}</b> left
                      </>
                    )}
                  </div>
                  {full ? (
                    <a className="btn full" aria-disabled="true">
                      Waitlist
                    </a>
                  ) : (
                    <a href="#trial" className="btn btn-volt">
                      Book
                    </a>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="sched-foot">
          <span>
            All classes are coached. Arrive 10 minutes early for your first
            visit.
          </span>
          <a
            href="#trial"
            style={{ textDecoration: "underline", color: "var(--ink)" }}
          >
            Download the full monthly timetable
          </a>
        </div>
      </div>
    </section>
  );
}
