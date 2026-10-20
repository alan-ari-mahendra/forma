export function Header() {
  return (
    <header>
      <div className="wrap">
        <nav aria-label="Main">
          <a href="#top" className="logo" aria-label="FORMA Athletic Club home">
            <i aria-hidden="true" />
            FORMA
          </a>
          <div className="links">
            <a href="#programs">Programs</a>
            <a href="#schedule">Schedule</a>
            <a href="#coaches">Coaches</a>
            <a href="#membership">Membership</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-r">
            <a href="#" className="login">
              Member Login
            </a>
            <a href="#trial" className="btn btn-volt">
              Book Free Trial
            </a>
            <button className="burger" type="button" aria-label="Open menu">
              <span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
