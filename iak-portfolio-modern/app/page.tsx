import { ArrowDownRight, ArrowUpRight, Code2, Cpu, ExternalLink, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import portfolio from '@/data/portfolio.json';

const glyphs = ['◈', '⌘', '⌁', '⌬', '⌖', '◉', '⌘'];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="nav-wrap"><nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="IAK home">IAK<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#certificates">Certificates</a></div>
        <a className="nav-cta" href="#contact">Contact <ArrowUpRight size={15}/></a>
      </nav></header>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span className="live-dot"/> Open to internships & entry-level roles</div>
          <p className="eyebrow">COMPUTER SCIENCE · SOFTWARE · AI</p>
          <h1>BUILDING<br/>DIGITAL <span>THINGS.</span></h1>
          <p className="hero-intro"><strong>{portfolio.name}</strong> — {portfolio.summary}</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a><a className="button button-quiet" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/>{portfolio.location}</span><span><Code2 size={14}/>B.Tech CSE · Class of {portfolio.graduation}</span></div>
        </div>
        <div className="hero-visual" aria-label="Abstract software and engineering illustration">
          <div className="visual-top"><span>IAK / SYSTEMS</span><span className="visual-live">● ONLINE</span></div>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <div className="core"><div className="core-inner">IAK</div></div>
          <div className="float-chip chip-ai"><Sparkles size={14}/> AI / ML</div><div className="float-chip chip-web"><Code2 size={14}/> WEB DEV</div><div className="float-chip chip-build"><Cpu size={14}/> ENGINEERING</div>
          <div className="visual-bottom"><span>DESIGN → BUILD → ITERATE</span><span>01 — 07</span></div>
        </div>
        <a className="scroll-hint" href="#about"><span/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section shell">
        <div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>Curious by nature.<br/><span>Builder by practice.</span></h2></div>
        <div className="about-grid"><p className="about-text">I’m a Computer Science Engineering student interested in building useful software and exploring the intersection of <strong>full-stack development, AI, and engineering design.</strong> I learn by shipping projects, documenting what works, and improving from feedback.</p>
          <div className="about-facts"><div><span>FOCUS</span><strong>Full-stack & AI apps</strong></div><div><span>EDUCATION</span><strong>B.Tech CSE · 2027</strong></div><div><span>LOCATION</span><strong>Dehradun, India</strong></div></div></div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading heading-row"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Projects in <span>progress.</span></h2></div><p className="section-note">A selection of software and engineering work. Open each repository for implementation details.</p></div>
        <div className="project-grid">{portfolio.projects.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.name}>
          <div className="project-top"><span className="project-index">{String(index + 1).padStart(2, '0')}</span><span className="project-glyph">{glyphs[index % glyphs.length]}</span><span className="project-category">{project.category}</span></div>
          <div className="project-content"><p className="project-status">{project.status}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a></div>
        </article>)}</div>
      </section>

      <section id="skills" className="section shell">
        <div className="section-heading"><p className="eyebrow">03 / TOOLKIT</p><h2>Tools I work <span>with.</span></h2><p className="section-note">Skills reflect hands-on projects and current learning. Keep proficiency claims aligned with what you can demonstrate.</p></div>
        <div className="skills-grid">{portfolio.skills.map((group, index) => <div className="skill-card" key={group.group}><div className="skill-card-top"><span>0{index + 1}</span><h3>{group.group}</h3></div><div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section id="certificates" className="section shell">
        <div className="section-heading heading-row"><div><p className="eyebrow">04 / LEARNING</p><h2>Certificates & <span>courses.</span></h2></div><p className="section-note">Selected credentials. Click to open the certificate file.</p></div>
        <div className="cert-grid">{portfolio.certificates.map((cert) => <article className="cert-card" key={cert.name}><div className="cert-icon"><Sparkles size={18}/></div><div className="cert-info"><h3>{cert.name}</h3><p>{cert.issuer}</p><div className="cert-links"><a href={cert.file} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={14}/></a>{'verify' in cert && cert.verify && <a href={cert.verify} target="_blank" rel="noreferrer">Verify <ExternalLink size={13}/></a>}</div></div></article>)}</div>
      </section>

      <section id="contact" className="contact-section"><div className="shell contact-inner"><p className="eyebrow">05 / CONTACT</p><h2>Have a project<br/>or opportunity? <span>Let’s talk.</span></h2><p className="contact-copy">I’m interested in software development internships, entry-level roles, and meaningful projects where I can learn and contribute.</p><div className="contact-actions"><a className="button button-primary" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn <ArrowUpRight size={15}/></a><a className="button button-quiet" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a></div><div className="contact-foot"><span>{portfolio.name}</span><span><MapPin size={13}/>{portfolio.location}</span><a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14}/> LinkedIn</a></div></div></section>
      <footer className="footer shell"><a className="wordmark" href="#home">IAK<span>.</span></a><p>Built with Next.js, React, TypeScript & CSS.</p><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
