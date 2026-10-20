import Image from "next/image";
import { coaches } from "@/lib/data";

export function Coaches() {
  return (
    <section className="dark" id="coaches">
      <div className="coach-hero">
        <div
          className="bg ph"
          data-label="Photo: head coach, wide dramatic shot"
        >
          <Image
            src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=2000&q=80"
            alt="Head coach standing on the training floor"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="wrap inner">
          <div className="eyebrow label">Coaching team</div>
          <h2 className="disp">
            Coaches who
            <br />
            actually <span className="mark">coach.</span>
          </h2>
          <p>
            Every FORMA coach holds a national certification, completes our
            in-house coaching program and keeps learning every quarter.
          </p>
        </div>
      </div>
      <div className="coaches">
        <div className="wrap">
          <div className="cgrid">
            {coaches.map((c) => (
              <article key={c.name} className="ccard">
                <div className="img ph" data-label="Coach portrait 3:4">
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    fill
                    sizes="(max-width: 720px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="info">
                  <h3>{c.name}</h3>
                  <p className="role">{c.role}</p>
                  <div className="creds">
                    {c.credentials.map((cr) => (
                      <span key={cr}>{cr}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
