import { Search } from "akar-icons";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container py-2">
            <a className="navbar-brand" href="#">
              <img src="/logo (1).png" alt="hanado" style={{ height: 48 }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Abous Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Our Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Delivery</a>
                </li>
              </ul>
              <form
                className="d-flex align-items-center position-relative"
                role="search"
              >
                <input
                  className="form-control me-2 rounded-pill ps-5"
                  type="search"
                  placeholder="Capuccino"
                  aria-label="Capuccino"
                />
                <Search className="fs-3 position-absolute start-0 ps-2" strokeWidth={2} size={24} color="white" />

                <i className="ai-search fs-3 position-absolute start-0 ps-2"></i>
                <i className="ai-cart fs-4"></i>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
