import Image from "next/image";
import { principles } from "@/lib/data";

export function Intro() {
  return (
    <section className="intro">
      <div className="wrap">
        <div className="intro-grid">
          <div>
            <div className="eyebrow label">The FORMA method</div>
            <h2 className="disp">
              Not a gym.
              <br />
              A <span className="mark">training club.</span>
            </h2>
            <p className="lead">
              Big-box gyms give you equipment and leave you alone. We give you a
              coach, a plan and a room full of people who show up. Every session
              is programmed in 6-week blocks so you always know what you are
              building toward.
            </p>
          </div>
          <div
            className="img ph lt"
            data-label="Photo: coach cueing a member on squat form, 4:5"
          >
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80"
              alt="Coach guiding a member through a squat"
              fill
              sizes="(max-width: 1080px) 100vw, 42vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="principles">
          {principles.map((p) => (
            <div key={p.number}>
              <i>{p.number}</i>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
