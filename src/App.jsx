import React, { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  UserRound
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/919908852757?text=Hi%20Nithin%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";

const roles = [
  {
    number: "01",
    company: "Cetus Automotives by BAB Group",
    role: "Client Experience Manager",
    period: "Jan 2026 - Present",
    location: "Hyderabad",
    image: "/assets/role-cetus.png",
    summary:
      "Building a premium client journey around CRM discipline, sales follow-ups, studio operations, production coordination, QC, and delivery communication.",
    highlights: [
      "Developing custom CRM and Odoo workflows for leads, follow-ups, and client communication.",
      "Aligning sales, production, factory, front office, QC, and delivery teams.",
      "Supporting campaigns, product videos, store events, outreach, and high-value consultations."
    ]
  },
  {
    number: "02",
    company: "Gogaga Holidays Pvt Ltd",
    role: "Assistant Manager",
    period: "Dec 2024 - Jan 2026",
    location: "Hyderabad",
    image: "/assets/role-gogaga.png",
    summary:
      "Managed the complete travel-service lifecycle, from client planning and documentation to vendor coordination, trip support, service recovery, and feedback.",
    highlights: [
      "Coordinated hotels, transport, tour operators, itineraries, and special requests.",
      "Negotiated vendor rates and delivered average booking savings of 5%.",
      "Resolved delays, cancellations, itinerary changes, and baggage concerns."
    ]
  },
  {
    number: "03",
    company: "VFS Global Pvt Ltd",
    role: "Senior Officer - Operations",
    period: "Jul 2022 - Nov 2024",
    location: "Hyderabad",
    image: "/assets/role-vfs.png",
    summary:
      "Led process-driven visa service operations with a focus on SOP adherence, team management, operational analytics, and service-quality improvement.",
    highlights: [
      "Led and trained a 15-member operations team.",
      "Used Power BI and operational data to identify bottlenecks.",
      "Reduced visa-service workflow errors by 25% and earned recognition."
    ]
  },
  {
    number: "04",
    company: "SpiceJet Pvt Ltd",
    role: "Customer Service Executive",
    period: "Jan 2022 - Jun 2022",
    location: "India",
    image: "/assets/role-spicejet.png",
    summary:
      "Built a strong customer-service foundation by resolving passenger issues in high-pressure airline operations with clarity, empathy, and speed.",
    highlights: [
      "Resolved booking, delay, cancellation, baggage, and special-assistance cases.",
      "Achieved 90% first-contact resolution on complex complaints.",
      "Supported ancillary revenue through upgrades and value-added services."
    ]
  }
];

const skillGroups = [
  {
    title: "Operations",
    items: ["Process optimization", "SOP documentation", "Quality control", "Workflow analysis", "Cross-functional alignment"]
  },
  {
    title: "CRM & Sales",
    items: ["Odoo CRM", "Lead tracking", "CRM hygiene", "Consultative sales", "Repeat business", "Pipeline visibility"]
  },
  {
    title: "Client Experience",
    items: ["High-value clients", "Escalation management", "Service recovery", "Retention", "Conflict resolution"]
  },
  {
    title: "Marketing & Data",
    items: ["Power BI", "Campaign support", "Brand videos", "Store events", "Feedback analysis", "Reporting"]
  }
];

const metrics = [
  { value: "4+", label: "Years across service and operations" },
  { value: "25%", label: "Reduction in workflow errors" },
  { value: "15", label: "Team members led and trained" },
  { value: "90%", label: "First-contact resolution" }
];

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function useInteractiveMotion() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.querySelectorAll("[data-parallax]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          const offset = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight));
          element.style.setProperty("--parallax-y", `${offset * -24}px`);
        });
        document.querySelectorAll(".experience-card").forEach((card) => {
          const progress = Math.max(0, Math.min(1, (110 - card.getBoundingClientRect().top) / 320));
          card.style.setProperty("--stack-scale", `${1 - progress * 0.035}`);
          card.style.setProperty("--stack-dim", `${1 - progress * 0.18}`);
        });
      });
    };
    const pointer = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    const cleanups = [...document.querySelectorAll("[data-magnetic]")].map((element) => {
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--magnetic-x", `${(event.clientX - rect.left - rect.width / 2) * 0.16}px`);
        element.style.setProperty("--magnetic-y", `${(event.clientY - rect.top - rect.height / 2) * 0.16}px`);
      };
      const leave = () => {
        element.style.setProperty("--magnetic-x", "0px");
        element.style.setProperty("--magnetic-y", "0px");
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); };
    });
    const tiltCleanups = finePointer ? [...document.querySelectorAll("[data-tilt]")].map((element) => {
      const move = (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        element.style.setProperty("--glass-x", `${x * 100}%`);
        element.style.setProperty("--glass-y", `${y * 100}%`);
        element.style.setProperty("--tilt-x", `${(0.5 - y) * 2.2}deg`);
        element.style.setProperty("--tilt-y", `${(x - 0.5) * 2.2}deg`);
      };
      const leave = () => {
        element.style.setProperty("--glass-x", "50%");
        element.style.setProperty("--glass-y", "50%");
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", leave); };
    }) : [];
    update();
    addEventListener("scroll", update, { passive: true });
    if (finePointer) addEventListener("pointermove", pointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", update);
      removeEventListener("pointermove", pointer);
      cleanups.forEach((cleanup) => cleanup());
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1650);
    return () => clearTimeout(timer);
  }, []);
  return <div className={visible ? "loader" : "loader is-finished"} aria-hidden="true">
    <div className="loader-mark"><span>NR</span></div>
    <p>Building better experiences</p>
    <div className="loader-line"><span /></div>
  </div>;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <a className="brand" href="#home" data-magnetic><span>NR</span></a>
      <nav aria-label="Main navigation">
        <a className={active === "about" ? "is-active" : ""} href="#about">About</a>
        <a className={active === "experience" ? "is-active" : ""} href="#experience">Experience</a>
        <a className={active === "skills" ? "is-active" : ""} href="#skills">Skills</a>
        <a className={active === "impact" ? "is-active" : ""} href="#impact">Impact</a>
      </nav>
      <div className="header-actions">
        <a className="header-action" href="/nithin-resume.docx" download data-magnetic>
          <ArrowDownToLine size={16} /> Resume
        </a>
        <a className="header-contact" href="#contact" data-magnetic>
          <MessageCircle size={16} /> Let&apos;s talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="star-field" aria-hidden="true" />
      <div className="hero-copy" data-reveal>
        <div className="availability"><span /> Open to opportunities</div>
        <p className="hero-intro">Hello, I am</p>
        <h1>Nithin Kumar Reddy</h1>
        <p className="hero-title">Client Experience & Operations Manager</p>
        <p className="hero-lede">
          I build reliable systems around people: CRM-led sales operations, premium client journeys,
          process improvement, and service delivery across fast-moving industries.
        </p>
        <div className="hero-tags">
          <span>CRM Operations</span><span>Client Experience</span><span>Process Excellence</span><span>Sales Support</span>
        </div>
        <div className="hero-actions">
          <a className="button primary" href="#experience" data-magnetic>View experience <ArrowUpRight size={17} /></a>
          <a className="button ghost" href="/nithin-resume.docx" download data-magnetic>Download resume <ArrowDownToLine size={17} /></a>
        </div>
      </div>
      <div className="hero-portrait" data-reveal>
        <img src="/assets/portrait-hero.jpeg" alt="N. Nithin Kumar Reddy" data-parallax />
        <div className="portrait-caption">
          <span>Current focus</span>
          <strong>Premium automotive client journeys</strong>
        </div>
      </div>
      <div className="scroll-cue">Scroll to explore <span /></div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="deck-panel about-panel glass-surface" data-reveal data-tilt>
        <span className="panel-number">01</span>
        <div>
          <p className="section-label">About / Personal approach</p>
          <h2>I improve the process behind the experience.</h2>
        </div>
        <blockquote>
          “Whether the customer is buying a premium automotive interior, planning a holiday,
          applying for a visa, or catching a flight, I focus on making the journey clearer,
          faster, and more dependable.”
        </blockquote>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-heading" data-reveal>
        <p className="section-label">Career / Selected experience</p>
        <h2>A career built across high-touch service environments.</h2>
      </div>
      <div className="experience-stack">
        {roles.map((item, index) => (
          <article
            className="experience-card glass-surface"
            data-reveal
            data-tilt
            key={item.company}
            style={{ "--stack-index": index, "--reveal-delay": `${index * 70}ms` }}
          >
            <div className="experience-copy">
              <span className="panel-number">{item.number}</span>
              <p className="experience-period">{item.period} / {item.location}</p>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} />{highlight}</li>)}
              </ul>
            </div>
            <div className="experience-image"><img src={item.image} alt="" data-parallax /></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="deck-panel skills-panel glass-surface" data-reveal data-tilt>
        <span className="panel-number">02</span>
        <p className="section-label">Capabilities / Working toolkit</p>
        <h2>Professional skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" data-reveal key={group.title}>
              <h3>{group.title}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="impact-section" id="impact">
      <div className="deck-panel impact-panel glass-surface" data-reveal data-tilt>
        <span className="panel-number">03</span>
        <p className="section-label">Impact / By the numbers</p>
        <h2>Results, not just responsibilities.</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div className="metric" data-reveal key={metric.value} style={{ "--reveal-delay": `${index * 80}ms` }}>
              <strong>{metric.value}</strong><span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="recognition-section">
      <div className="deck-panel recognition-panel glass-surface" data-reveal data-tilt>
        <span className="panel-number">04</span>
        <div className="recognition-copy">
          <p className="section-label">Education / Recognition</p>
          <h2>Built through service, learning, and ownership.</h2>
        </div>
        <div className="recognition-list">
          <article><Award size={22} /><div><strong>Outstanding Performance</strong><p>Certificate of Appreciation, VFS Global, 2023.</p></div></article>
          <article><BarChart3 size={22} /><div><strong>Power BI Data Analysis</strong><p>VFS Global & Office Master, 2024.</p></div></article>
          <article><Sparkles size={22} /><div><strong>Generative AI Mastermind</strong><p>Outskill, Vaibhav Sisinty.</p></div></article>
          <article><BriefcaseBusiness size={22} /><div><strong>Aviation, Hospitality & Travel Management</strong><p>Frankfinn Institute, 2021.</p></div></article>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy" data-reveal>
        <p className="section-label">Contact / Let us connect</p>
        <h2>Open to India-based and international opportunities.</h2>
        <p>Best fit: client experience, CRM operations, sales operations, operations management, service delivery, and customer success.</p>
        <div className="contact-actions">
          <a className="contact-primary" href={whatsappUrl} target="_blank" rel="noreferrer" data-magnetic><MessageCircle size={18} />WhatsApp</a>
          <a href="mailto:nithinreddynalavolu@gmail.com" data-magnetic><Mail size={18} />Email me</a>
          <a href="tel:+919908852757" data-magnetic><Phone size={18} />Call</a>
          <a href="https://www.linkedin.com/in/rnithinkumar043/" target="_blank" rel="noreferrer" data-magnetic><BriefcaseBusiness size={18} />LinkedIn</a>
        </div>
      </div>
      <div className="contact-meta glass-surface" data-reveal data-tilt>
        <div><MapPin size={18} /><span>Hyderabad, Telangana, India</span></div>
        <div><Globe2 size={18} /><span>English / Hindi / Telugu</span></div>
      </div>
    </section>
  );
}

function MobileNavigation() {
  return <nav className="mobile-navigation" aria-label="Mobile navigation">
    <a href="#home"><Home size={18} /><span>Home</span></a>
    <a href="#about"><UserRound size={18} /><span>About</span></a>
    <a href="#experience"><BriefcaseBusiness size={18} /><span>Work</span></a>
    <a href="#impact"><BarChart3 size={18} /><span>Impact</span></a>
  </nav>;
}

function App() {
  useReveal();
  useInteractiveMotion();
  return <>
    <LoadingScreen />
    <div className="cursor-light" aria-hidden="true" />
    <ScrollProgress />
    <Header />
    <main><Hero /><About /><Experience /><Skills /><Impact /><Recognition /><Contact /></main>
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Nithin on WhatsApp" title="Contact on WhatsApp" data-magnetic>
      <MessageCircle size={23} />
    </a>
    <MobileNavigation />
    <footer><span>© 2026 N. Nithin Kumar Reddy</span><a href="#home">Back to top</a></footer>
  </>;
}

export default App;
