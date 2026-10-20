import { faqItems } from "@/lib/data";

export function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="wrap faq-grid">
        <div className="side">
          <div className="eyebrow label">FAQ</div>
          <h2 className="disp">
            Before
            <br />
            you come in.
          </h2>
          <p>
            Still unsure? Message us and a coach will reply within the hour
            during opening times.
          </p>
          <a href="#trial" className="btn btn-line">
            Contact a coach
          </a>
        </div>
        <div>
          {faqItems.map((item) => (
            <details
              key={item.question}
              open={item.defaultOpen || undefined}
            >
              <summary>
                {item.question}
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
