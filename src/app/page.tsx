import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header id="header">
        <div className="container">
          <div className="logo">
            {/* SVG Logo */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 600 100"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
            >
              <rect
                x="50"
                y="0"
                width="100"
                height="100"
                rx="20"
                fill="#00224d"
              />
              <text
                x="60"
                y="60"
                fontFamily="monospace"
                fontSize="40"
                fill="#f5c16c"
                className="icon"
              >
                &lt;/&gt;
              </text>
              <text
                x="160"
                y="55"
                fontFamily="serif"
                fontSize="48"
                fill="#d4af37"
              >
                Reda
              </text>
              <text x="160" y="85" fontFamily="Arial" fontSize="18" fill="#fff">
                WEB DEVELOPMENT
              </text>
            </svg>
          </div>
          <ul className="main-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button className="btn" aria-label="Toggle Menu">
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-logo">
            <a href="#">
              <span className="link-text">Reda</span>
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </li>
          <li>
            <a href="#home">
              <i className="fa-solid fa-house"></i>
              <span className="link-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fa-solid fa-address-card"></i>
              <span className="link-text">About</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="fa-solid fa-database"></i>
              <span className="link-text">Services</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fa-solid fa-headset"></i>
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Full Stack Web Developer | Creative Problem Solver</p>
            <a href="#contact" className="cta-button">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-me">
            <div className="image">
              <Image
                src="/assets/images/IMG_20250307_005202.jpg"
                alt="Reda's Photo"
                width={200}
                height={200}
                style={{ borderRadius: "1rem", objectFit: "cover" }}
              />
            </div>
            <div className="about-text">
              <h2>Merahi Mohammed Reda</h2>
              <p>
                I&apos;m a passionate web developer based in Oran, Algeria. With
                three years of experience in coding, I&apos;ve overcome various
                challenges to grow as a developer. I&apos;m 27 years old, and I&apos;m
                constantly seeking new opportunities to expand my skills and
                create impactful web solutions.
              </p>

              <div className="skills">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>My Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fa-solid fa-code"></i>
              <h3>Web Development</h3>
              <p>Custom websites built with modern technologies</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-mobile-screen"></i>
              <h3>Responsive Design</h3>
              <p>Mobile-first approach for all devices</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-database"></i>
              <h3>Backend Solutions</h3>
              <p>Robust server-side applications</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <p>redamohammed19988@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <p>Oran, Algeria</p>
              </div>
            </div>
            <a
              href="mailto:redamohammed19988@gmail.com"
              className="submit-btn"
              style={{
                display: "inline-block",
                textAlign: "center",
                marginTop: "1.5rem",
              }}
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Reda. All rights reserved.</p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
