import { bigQuote, resultCards, ratingRow } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="testi dark">
      <div className="wrap">
        <div className="big-quote">
          <div className="stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote>{bigQuote.text}</blockquote>
          <cite>{bigQuote.author}</cite>
        </div>

        <div className="results">
          {resultCards.map((r) => (
            <div key={r.name} className="res">
              <div className="stat">
                <b>{r.stat}</b>
                <span>{r.statLabel}</span>
              </div>
              <p>{r.quote}</p>
              <div className="who">
                <span />
                <div>
                  <b>{r.name}</b>
                  <small>{r.detail}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rating-row">
          {ratingRow.map((r) => (
            <div key={r.label}>
              <b>{r.value}</b>
              <small>{r.label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
