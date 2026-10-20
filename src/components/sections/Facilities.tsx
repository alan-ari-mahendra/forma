import Image from "next/image";
import { facilities } from "@/lib/data";

export function Facilities() {
  return (
    <section className="facilities dark">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow label">The space</div>
            <h2 className="disp">
              10,000 sq ft
              <br />
              built to train.
            </h2>
          </div>
          <p>
            Competition-grade equipment, a dedicated boxing room and a recovery
            suite. Everything you need, nothing you will never use.
          </p>
        </div>
        <div className="bento">
          {facilities.map((f) => (
            <div key={f.number} className={`tile ${f.className}`}>
              <div className="ph" data-label={`Photo: ${f.title}`}>
                <Image
                  src={f.image.src}
                  alt={f.image.alt}
                  fill
                  sizes={
                    f.className === "t1"
                      ? "(max-width: 720px) 100vw, 50vw"
                      : f.className === "t2"
                        ? "(max-width: 720px) 100vw, 50vw"
                        : "(max-width: 720px) 100vw, 25vw"
                  }
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="cap">
                <div>
                  <h3>{f.title}</h3>
                  <small>{f.description}</small>
                </div>
                <span className="num">{f.number}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="facil-note">
          <span>
            <b>Open</b> Mon to Fri 5:30 AM to 10 PM, Sat to Sun 7 AM to 6 PM
          </span>
          <span>
            <b>Included</b> Towels, lockers, showers, filtered water
          </span>
          <span>
            <b>Parking</b> Free member lot and bike racks
          </span>
        </div>
      </div>
    </section>
  );
}
