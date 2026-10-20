"use client";

import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="news">
            <h4>Train smarter, weekly.</h4>
            <p>
              One email a week: programming notes, recovery tips and class
              updates. No spam.
            </p>
            <form onSubmit={(e) => e.preventDefault()} aria-label="Newsletter">
              <label htmlFor="nl" className="sr-only">
                Email
              </label>
              <input id="nl" type="email" placeholder="Your email" />
              <button className="btn btn-volt" type="submit">
                Join
              </button>
            </form>
          </div>

          <div>
            <h5>Club</h5>
            <ul>
              {footerLinks.club.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Members</h5>
            <ul>
              {footerLinks.members.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Visit</h5>
            <ul>
              {footerLinks.visit.map((item) => (
                <li key={item.text}>
                  {item.href ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fbot">
          <span>&copy; 2026 FORMA Athletic Club. All rights reserved.</span>
          <div className="soc">
            <a href="#" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
                <path d="M14 3c.5 2.5 2.5 4.5 5 5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="2.5" y="5.5" width="19" height="13" rx="3" />
                <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <span>
            <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
          </span>
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">
        FORMA
      </div>
    </footer>
  );
}
