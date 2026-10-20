import { pricingPlans } from "@/lib/data";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      aria-hidden="true"
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section className="pricing" id="membership">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow label">Membership</div>
            <h2 className="disp">
              Simple
              <br />
              pricing.
            </h2>
          </div>
          <p>
            No joining fee. No long contract. Freeze up to 2 months a year,
            cancel with 30 days notice.
          </p>
        </div>

        <div className="offer">
          <div>
            <h3>
              New here? First week <span>free.</span>
            </h3>
            <p>
              7 days of unlimited classes, onboarding with a coach, no card
              required.
            </p>
          </div>
          <a href="#trial" className="btn btn-volt">
            Claim free week
          </a>
        </div>

        <div className="plans">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`plan${plan.featured ? " feat" : ""}`}
            >
              {plan.badge && <span className="badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <p className="desc">{plan.description}</p>
              <div className="price">
                <b>{plan.price}</b>
                <small>{plan.unit}</small>
              </div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#trial" className={`btn ${plan.btnStyle}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="price-note">
          Student, first responder and corporate rates available. Ask at the
          front desk.
        </p>
      </div>
    </section>
  );
}
