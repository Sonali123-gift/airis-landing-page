import { useState, useEffect } from 'react'
import airisIcon from './imports/Airis_Icon.png'

// ─── Types ───────────────────────────────────────────────────────────────────
type Page = 'home' | 'features' | 'technology' | 'about' | 'faq' | 'contact' | 'waitlist' | 'success'

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Features', page: 'features' },
    { label: 'Technology', page: 'technology' },
    { label: 'About', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => navigate('home')} className="flex items-center gap-2.5">
          <img src={airisIcon} alt="Airis" className="w-8 h-8" />
          <span className="font-bold text-lg" style={{ color: '#0F2544', letterSpacing: '-0.3px' }}>Airis</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button
              key={l.page}
              onClick={() => navigate(l.page)}
              className="nav-link"
              style={{ color: current === l.page ? '#2563EB' : undefined }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-primary" style={{ padding: '9px 22px', fontSize: '14px' }} onClick={() => navigate('waitlist')}>
            Join Waitlist
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-gray-700 transition-all duration-200" style={{ transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
          <span className="block w-5 h-0.5 bg-gray-700 transition-all duration-200" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-gray-700 transition-all duration-200" style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden animate-fade-in"
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid #E5E7EB',
            padding: '16px 24px 24px',
          }}
        >
          {links.map(l => (
            <button
              key={l.page}
              onClick={() => { navigate(l.page); setMenuOpen(false) }}
              className="block w-full text-left py-3 nav-link border-b border-gray-100 text-base"
              style={{ color: current === l.page ? '#2563EB' : undefined }}
            >
              {l.label}
            </button>
          ))}
          <button
            className="btn-primary w-full mt-4"
            style={{ fontSize: '15px', padding: '14px' }}
            onClick={() => { navigate('waitlist'); setMenuOpen(false) }}
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer style={{ background: '#0F2544', color: '#CBD5E1' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={airisIcon} alt="Airis" className="w-8 h-8 brightness-0 invert" />
              <span className="font-bold text-lg text-white">Airis</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
              The world's first invisible AI smart contact lens. See clearly. Live confidently.
            </p>
            <div className="flex gap-3 mt-5">
              {['𝕏', 'in', 'f', '▶'].map((s, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#94A3B8' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2563EB'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLButtonElement).style.color = '#94A3B8' }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <div className="flex flex-col gap-2.5">
              {[['Features', 'features'], ['Technology', 'technology'], ['FAQ', 'faq']].map(([l, p]) => (
                <button key={p} onClick={() => navigate(p as Page)} className="text-sm text-left transition-colors duration-150" style={{ color: '#94A3B8' }} onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')} onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>{l}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              {[['About', 'about'], ['Contact', 'contact'], ['Careers', 'contact']].map(([l, p]) => (
                <button key={l} onClick={() => navigate(p as Page)} className="text-sm text-left transition-colors duration-150" style={{ color: '#94A3B8' }} onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')} onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>{l}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              {['Privacy Policy', 'Terms of Service', 'Support'].map(l => (
                <button key={l} className="text-sm text-left transition-colors duration-150" style={{ color: '#94A3B8' }} onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')} onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>{l}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-sm" style={{ color: '#64748B' }}>© 2026 Airis Technologies. All rights reserved.</p>
          <p className="text-sm" style={{ color: '#64748B' }}>Designed for the future of vision.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── HOME PAGE ───────────────────────────────────────────────────────────────
function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [activeTechNode, setActiveTechNode] = useState<number | null>(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState('')

  const steps = [
    { label: 'Wear Lens', desc: 'Simply insert Airis like a regular contact lens. It\'s ultra-thin, oxygen-permeable, and designed for all-day comfort.', icon: '👁' },
    { label: 'AI Scans Eye', desc: 'Embedded micro-sensors continuously analyze intraocular pressure, glucose levels, corneal health, and visual acuity in real time.', icon: '🔬' },
    { label: 'Receive Insights', desc: 'Personalized health insights and vision corrections are computed by our on-lens AI processor and synced to your phone.', icon: '📊' },
    { label: 'Track Health', desc: 'Monitor eye health trends over time, receive alerts for anomalies, and share reports directly with your ophthalmologist.', icon: '💚' },
  ]

  const features = [
    { title: 'Adaptive Vision', desc: 'Auto-adjusts refractive power in real time for perfect focus at any distance.', icon: '🔭', color: '#2563EB' },
    { title: 'Night Mode', desc: 'Enhances low-light vision with AI-driven pupil adaptation technology.', icon: '🌙', color: '#0F2544' },
    { title: 'Health Analytics', desc: 'Continuous eye pressure and glucose monitoring without any external device.', icon: '❤️', color: '#EF4444' },
    { title: 'Wireless Charging', desc: 'Inductive charging case restores power in 30 minutes. 18-hour battery life.', icon: '⚡', color: '#F5A742' },
    { title: 'Emergency Detection', desc: 'Detects sudden vision changes and alerts emergency contacts automatically.', icon: '🚨', color: '#10B981' },
    { title: 'AI Assistant', desc: 'Voice and blink-controlled heads-up display for navigation and notifications.', icon: '🤖', color: '#38BDF8' },
    {
      title: 'AI Earbuds', desc: 'Companion wireless earbuds provide voice assistance, real-time translation, private audio, navigation guidance, and emergency alerts while seamlessly connecting with Airis smart lenses.', icon: 'ᖰ🧸ྀིᖳ', color: '#8B5CF6'
    },]

  const techNodes = [
    { label: 'Smart Lens', desc: 'Ultra-thin hydrogel lens with embedded photonic circuits. 14.5mm diameter, 0.08mm center thickness.', icon: '💧' },
    { label: 'AI Earbuds', desc: 'Bluetooth 5.4 earbuds with AI voice assistant, spatial audio, real-time translation, and secure communication with Airis Smart Lens.', icon: 'ᖰ🧸ྀིᖳ' },
    { label: 'Micro Sensors', desc: '12 nano-scale sensors monitoring IOP, glucose, pH, temperature, and UV exposure continuously.', icon: '⚙️' },
    { label: 'AI Processor', desc: 'Custom silicon at 5nm node. 2.4 TOPS performance at 0.3mW power consumption.', icon: '🧠' },
    { label: 'Cloud Sync', desc: 'Encrypted BLE 5.3 transmission to companion app. End-to-end zero-knowledge architecture.', icon: '☁️' },
    { label: 'Mobile App', desc: 'iOS and Android companion app with real-time dashboards, trend analytics, and clinician sharing.', icon: '📱' },
  ]

  const testimonials = [
    { name: 'Sonali Khadka', role: 'Ophthalmologist, Stanford Medical', text: "Airis represents a paradigm shift in preventive eye care. The continuous IOP monitoring alone could transform how we manage glaucoma patients.", avatar: '👩‍⚕️' },
    { name: 'PMH', role: 'Type 1 Diabetic, Beta User', text: "I've been wearing Airis for 6 months. The glucose monitoring is remarkably accurate and the comfort is indistinguishable from my regular lenses.", avatar: '👨' },
    { name: 'Jex', role: 'AI Research, MIT', text: "The on-device inference architecture is genuinely impressive. They've achieved what many thought impossible in such a constrained power budget.", avatar: '👩‍🔬' },
    { name: 'Daniel', role: 'Athlete, Olympic Triathlete', text: "Night Mode and adaptive vision have given me a real competitive edge. I can't imagine training without Airis anymore.", avatar: '🏊‍♀️' },
  ]

  const faqs = [
    { q: 'Is Airis safe to wear?', a: 'Airis has undergone extensive clinical trials across 18 countries. All materials are ISO 13485 certified and FDA breakthrough device designated. Over 4,000 participants reported zero adverse events in our Phase III trials.' },
    { q: 'Why does Airis include AI Earbuds?', a: 'The Airis AI Earbuds work together with the smart contact lens to provide private audio, voice commands, live language translation, navigation guidance, phone calls, and emergency alerts without requiring users to look at their phones.' }, { q: 'How long can I wear Airis per day?', a: 'Airis is approved for up to 16 hours of continuous wear. The lens is highly oxygen-permeable (Dk/t = 175) ensuring corneal health throughout the day.' },
    { q: 'Does it work with prescriptions?', a: 'Yes. Airis is available in sphere powers from -12.00 to +8.00 D with cylinder correction up to -4.00 D. Our adaptive optics layer provides an additional ±2.00 D of dynamic correction.' },
    { q: 'How does charging work?', a: 'Your lenses charge in a proprietary inductive case — similar to wireless earbuds. A full charge is achieved in under 30 minutes and provides 18 hours of active use.' },
    { q: 'When will Airis be available?', a: 'We are currently accepting early access applications. Commercial availability is planned for Q2 2027, initially in the US, EU, UK, Japan, and Australia.' },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) { setEmailError('Please enter a valid email address.'); return }
    setEmailError('')
    setEmailSent(true)
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F2544 0%, #1B3A6B 40%, #1a5276 70%, #0d3d56 100%)',
        }}
      >
        {/* animated gradient bg */}
        <div className="absolute inset-0 animate-gradient" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(56,189,248,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(37,99,235,0.25) 0%, transparent 70%)' }} />

        {/* floating dots pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow inline-block" />
              Now accepting early access applications
            </div>

            <h1 className="font-extrabold text-white mb-6" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 1.08, letterSpacing: '-1.5px' }}>
              See Clearly.<br />
              <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Live Confidently.
              </span>
            </h1>

            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              The world's first invisible AI smart contact lens designed to improve vision while continuously monitoring your eye health.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="btn-primary" style={{ fontSize: '16px', padding: '14px 32px' }} onClick={() => navigate('waitlist')}>
                Join Waitlist
              </button>
              <button className="btn-white" style={{ fontSize: '16px', padding: '14px 32px', background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }} onClick={() => navigate('features')}>
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              {[['18K+', 'Waitlist'], ['FDA', 'Breakthrough'], ['99.4%', 'Accuracy']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-2xl text-white">{v}</div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — glass cards */}
          <div className="relative flex items-center justify-center h-96 md:h-[520px]">
            {/* Central icon */}
            <div className="animate-float absolute" style={{ zIndex: 2 }}>
              <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 32px 64px rgba(0,0,0,0.3)' }}>
                <img src={airisIcon} alt="Airis Lens" style={{ width: 120, height: 120 }} />
              </div>
            </div>

            {/* Floating info cards */}
            <div className="glass absolute rounded-2xl p-4 animate-float" style={{ top: '8%', right: '5%', animationDelay: '0.5s', minWidth: 160 }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#38BDF8' }}>AI Processing</div>
              <div className="text-white font-bold text-lg">2.4 TOPS</div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>On-lens compute</div>
            </div>

            <div className="glass absolute rounded-2xl p-4 animate-float" style={{ bottom: '15%', left: '2%', animationDelay: '1s', minWidth: 160 }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#10B981' }}>Health Score</div>
              <div className="text-white font-bold text-lg">98/100</div>
              <div className="w-full h-1.5 rounded-full mt-1.5" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="h-1.5 rounded-full" style={{ width: '98%', background: '#10B981' }} />
              </div>
            </div>

            <div className="glass absolute rounded-2xl p-4 animate-float" style={{ bottom: '30%', right: '2%', animationDelay: '1.8s', minWidth: 140 }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#F5A742' }}>Battery</div>
              <div className="text-white font-bold text-lg">18h</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Per charge</div>
            </div>

            {/* Orbit rings */}
            <div className="absolute rounded-full" style={{ width: 280, height: 280, border: '1px solid rgba(255,255,255,0.08)' }} />
            <div className="absolute rounded-full" style={{ width: 380, height: 380, border: '1px solid rgba(255,255,255,0.04)' }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-24 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>Core Benefits</div>
            <h2 className="section-title mb-4">Vision, Health &amp; <span className="gradient-text">Privacy</span></h2>
            <p className="section-subtitle">Three foundational pillars that define the Airis experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Smart Vision', icon: '🔭', color: '#2563EB', bg: 'rgba(37,99,235,0.06)', desc: 'Adaptive optics that automatically correct your vision in real time — indoors, outdoors, up close, far away. No more switching glasses.' },
              { title: 'Health Monitoring', icon: '🫀', color: '#10B981', bg: 'rgba(16,185,129,0.06)', desc: 'Continuous, medical-grade monitoring of intraocular pressure, corneal glucose, and 10 other biomarkers directly from your eye.' },
              { title: 'Privacy First', icon: '🔒', color: '#0F2544', bg: 'rgba(15,37,68,0.06)', desc: 'All health data is processed on-device with zero-knowledge encryption. We never see your data. You own it completely.' },
              { title: 'Smart Audio', icon: 'ᖰ🧸ྀིᖳ', color: '#8B5CF6', bg: 'rgba(139,92,246,0.06)', desc: 'Receive navigation, AI assistance, emergency alerts, calls, and live translation directly through wireless earbuds without distracting your vision.' },
            ].map(card => (
              <div
                key={card.title}
                className="card-hover rounded-2xl p-8 cursor-pointer group"
                style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #E5E7EB' }}
                onClick={() => navigate('features')}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:rotate-6" style={{ background: card.bg }}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: '#111827' }}>{card.title}</h3>
                <p className="leading-relaxed text-sm" style={{ color: '#6B7280' }}>{card.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold" style={{ color: card.color }}>
                  Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>Process</div>
            <h2 className="section-title mb-4">How It <span className="gradient-text">Works</span></h2>
            <p className="section-subtitle">Four seamless steps from morning wear to evening insights.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 hidden md:block" style={{ width: 2, background: 'linear-gradient(to bottom, #2563EB, #38BDF8, #10B981)' }} />

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div
                    className="flex-1 card-hover rounded-2xl p-6 cursor-pointer"
                    style={{
                      background: activeStep === i ? '#2563EB' : '#fff',
                      boxShadow: activeStep === i ? '0 16px 48px rgba(37,99,235,0.3)' : '0 4px 24px rgba(0,0,0,0.06)',
                      border: '1px solid ' + (activeStep === i ? '#2563EB' : '#E5E7EB'),
                      transition: 'all 0.25s ease',
                    }}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <div className="text-xs font-semibold" style={{ color: activeStep === i ? 'rgba(255,255,255,0.6)' : '#2563EB' }}>Step {i + 1}</div>
                        <div className="font-bold text-lg" style={{ color: activeStep === i ? '#fff' : '#111827' }}>{step.label}</div>
                      </div>
                    </div>
                    {activeStep === i && (
                      <p className="text-sm leading-relaxed animate-fade-in" style={{ color: 'rgba(255,255,255,0.85)' }}>{step.desc}</p>
                    )}
                    {activeStep !== i && (
                      <p className="text-xs" style={{ color: '#9CA3AF' }}>Click to learn more</p>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="relative z-10 hidden md:flex">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #38BDF8)', boxShadow: '0 0 0 4px #fff, 0 0 0 6px #2563EB' }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>Capabilities</div>
            <h2 className="section-title mb-4">Packed with <span className="gradient-text">Intelligence</span></h2>
            <p className="section-subtitle">Six breakthrough features engineered into something you can barely see.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div
                key={f.title}
                className="card-hover rounded-2xl p-7 cursor-pointer group"
                style={{ background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', border: '1px solid #E5E7EB' }}
                onClick={() => navigate('features')}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:rotate-6" style={{ background: f.color + '14' }}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#111827' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{f.desc}</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: f.color }}>Explore →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI TECHNOLOGY ── */}
      <section className="py-24 px-6" style={{ background: '#0F2544' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8' }}>Architecture</div>
            <h2 className="section-title mb-4 text-white">The Technology <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Stack</span></h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Click any layer to explore the technical details.</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            {techNodes.map((node, i) => (
              <div key={i} className="w-full max-w-md">
                <div
                  className="tech-node rounded-2xl p-5 relative"
                  style={{
                    background: activeTechNode === i ? 'rgba(37,99,235,0.8)' : 'rgba(255,255,255,0.06)',
                    border: '1px solid ' + (activeTechNode === i ? '#2563EB' : 'rgba(255,255,255,0.12)'),
                    boxShadow: activeTechNode === i ? '0 8px 32px rgba(37,99,235,0.4)' : 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onClick={() => setActiveTechNode(activeTechNode === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{node.icon}</span>
                    <span className="font-semibold text-white">{node.label}</span>
                    <span className="ml-auto text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{activeTechNode === i ? '▲' : '▼'}</span>
                  </div>
                  {activeTechNode === i && (
                    <p className="mt-3 text-sm leading-relaxed animate-fade-in" style={{ color: 'rgba(255,255,255,0.75)' }}>{node.desc}</p>
                  )}
                </div>
                {i < techNodes.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-px h-6" style={{ background: 'rgba(56,189,248,0.4)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary" onClick={() => navigate('technology')}>Explore Full Technology →</button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>Testimonials</div>
            <h2 className="section-title mb-4">What <span className="gradient-text">Experts Say</span></h2>
          </div>

          <div className="relative">
            <div className="card-hover rounded-2xl p-10 text-center" style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
              <div className="text-5xl mb-4">{testimonials[testimonialIdx].avatar}</div>
              <blockquote className="text-lg leading-relaxed mb-6 max-w-2xl mx-auto" style={{ color: '#374151', fontStyle: 'italic' }}>
                "{testimonials[testimonialIdx].text}"
              </blockquote>
              <div className="font-semibold text-base" style={{ color: '#111827' }}>{testimonials[testimonialIdx].name}</div>
              <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{testimonials[testimonialIdx].role}</div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}
                onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2563EB'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLButtonElement).style.color = 'inherit' }}
              >
                ←
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className="rounded-full transition-all duration-200"
                    style={{ width: i === testimonialIdx ? 24 : 8, height: 8, background: i === testimonialIdx ? '#2563EB' : '#CBD5E1' }}
                    onClick={() => setTestimonialIdx(i)}
                  />
                ))}
              </div>

              <button
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}
                onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#2563EB'; (e.currentTarget as HTMLButtonElement).style.color = '#fff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLButtonElement).style.color = 'inherit' }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(37,99,235,0.08)', color: '#2563EB' }}>FAQ</div>
            <h2 className="section-title mb-4">Common <span className="gradient-text">Questions</span></h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #E5E7EB', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold" style={{ color: '#111827' }}>{item.q}</span>
                  <span
                    className="text-lg ml-4 flex-shrink-0 transition-transform duration-300"
                    style={{ color: '#2563EB', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}
                  >
                    ⌄
                  </span>
                </button>
                <div
                  className="accordion-content"
                  style={{ maxHeight: openFaq === i ? '200px' : '0', opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-secondary" onClick={() => navigate('faq')}>View All FAQs</button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #1B3A6B, #0d3d56)' }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="text-5xl mb-5">💌</div>
          <h2 className="font-extrabold text-3xl mb-4 text-white">Stay in the Loop</h2>
          <p className="mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Get the latest Airis news, launch updates, and early access invitations delivered to your inbox.
          </p>

          {emailSent ? (
            <div className="rounded-2xl p-6 animate-fade-in" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)' }}>
              <div className="text-3xl mb-2">✅</div>
              <div className="font-semibold text-white text-lg">You're on the list!</div>
              <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>We'll be in touch soon.</div>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-5 py-3.5 rounded-xl text-sm outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: emailError ? '1.5px solid #EF4444' : '1.5px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontFamily: 'inherit',
                  }}
                />
                {emailError && <p className="text-xs mt-1.5 text-red-400">{emailError}</p>}
              </div>
              <button type="submit" className="btn-primary flex-shrink-0" style={{ padding: '14px 24px' }}>
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

// ─── FEATURES PAGE ───────────────────────────────────────────────────────────
function FeaturesPage({ navigate }: { navigate: (p: Page) => void }) {
  const features = [
    {
      title: 'Adaptive Vision',
      icon: '🔭',
      color: '#2563EB',
      image: '🌐',
      desc: 'Our proprietary liquid crystal micro-lens array dynamically adjusts refractive power based on your gaze direction and distance. Presbyopia, myopia, hyperopia — corrected in real time.',
      specs: ['Correction range: -12.00 to +8.00 D', 'Dynamic range: ±2.00 D additional', 'Response time: <8ms', 'Accuracy: ±0.12 D'],
      benefits: ['No more switching glasses', 'Clear vision at all distances', 'Reduces eye strain by 40%', 'Works in bright and dim conditions'],
    },
    {
      title: 'Night Mode',
      icon: '🌙',
      color: '#0F2544',
      image: '🌃',
      desc: 'Proprietary low-light enhancement algorithms boost retinal contrast and reduce glare from artificial light sources, giving you superior vision after dark.',
      specs: ['Low-light gain: 4× improvement', 'Glare reduction: 85%', 'Color accuracy maintained', 'Automatic activation'],
      benefits: ['Drive safely at night', 'Reduced halos and starbursts', 'Improved sports performance', 'Automatic sunrise/sunset switching'],
    },
    {
      title: 'Health Analytics',
      icon: '❤️',
      color: '#EF4444',
      image: '📈',
      desc: 'Twelve embedded electrochemical and photonic sensors provide continuous, medical-grade monitoring of intraocular pressure, glucose, pH, temperature, and eight other biomarkers.',
      specs: ['IOP accuracy: ±1.2 mmHg', 'Glucose correlation: r=0.97', 'Sampling rate: 60Hz', 'FDA Breakthrough designation'],
      benefits: ['Early glaucoma detection', 'Non-invasive glucose monitoring', 'Corneal inflammation alerts', 'Clinician data sharing'],
    },
    {
      title: 'Wireless Charging',
      icon: '⚡',
      color: '#F5A742',
      image: '🔋',
      desc: 'A 0.1mAh solid-state micro-battery powers all lens functions. The included inductive charging case restores full charge in under 30 minutes, providing 18 hours of active use.',
      specs: ['Battery capacity: 0.1mAh', 'Charging time: <30 min', 'Daily use: 18 hours', 'Wireless standard: WPT 1.3'],
      benefits: ['Full day of use', 'Case charges in 90 min', 'LED charge indicator', 'Travel-friendly design'],
    },
    {
      title: 'Emergency Detection',
      icon: '🚨',
      color: '#10B981',
      image: '🆘',
      desc: 'Real-time anomaly detection algorithms continuously analyze vision and health biomarkers. Sudden IOP spikes, corneal trauma, or unusual glucose drops trigger immediate alerts.',
      specs: ['Detection latency: <500ms', 'False positive rate: <0.3%', 'Alert delivery: <5 seconds', 'Works without phone nearby'],
      benefits: ['Glaucoma crisis prevention', 'Diabetic emergency alerts', 'Emergency contact notification', 'Location sharing option'],
    },
    {
      title: 'AI Assistant',
      icon: '🤖',
      color: '#38BDF8',
      image: '💡',
      desc: 'A subtle heads-up display layer projects information directly into your visual field. Controlled by eye movement and blink patterns, it provides navigation, notifications, and health summaries.',
      specs: ['HUD resolution: 120 PPI', 'Field of view: 15° diagonal', 'Control: blink & gaze', 'Brightness: auto-adaptive'],
      benefits: ['Turn-by-turn navigation', 'Health stats on demand', 'Message previews', 'Hands-free operation'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0F2544, #1B3A6B)' }}>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8' }}>All Features</div>
        <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1px' }}>
          Six Ways Airis <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Changes Everything</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Every feature is engineered to be invisible, intelligent, and indispensable.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-16">
          {features.map((f, i) => (
            <div key={f.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'md:[direction:rtl]' : ''}`} style={{ direction: 'ltr' }}>
              {/* Visual */}
              <div
                className="rounded-3xl flex items-center justify-center aspect-video text-8xl"
                style={{
                  background: `linear-gradient(135deg, ${f.color}18, ${f.color}08)`,
                  border: `1px solid ${f.color}20`,
                  direction: 'ltr',
                }}
              >
                {f.image}
              </div>

              {/* Content */}
              <div style={{ direction: 'ltr' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: f.color + '18' }}>{f.icon}</div>
                  <h2 className="font-bold text-2xl" style={{ color: '#111827' }}>{f.title}</h2>
                </div>
                <p className="leading-relaxed mb-6" style={{ color: '#6B7280' }}>{f.desc}</p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#9CA3AF' }}>Specifications</h4>
                    <ul className="flex flex-col gap-2">
                      {f.specs.map(s => (
                        <li key={s} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
                          <span style={{ color: f.color }}>•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#9CA3AF' }}>Benefits</h4>
                    <ul className="flex flex-col gap-2">
                      {f.benefits.map(b => (
                        <li key={b} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
                          <span style={{ color: '#10B981' }}>✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button className="btn-primary" style={{ fontSize: '14px', padding: '10px 22px' }} onClick={() => navigate('waitlist')}>
                    Join Waitlist
                  </button>
                  <button className="btn-secondary" style={{ fontSize: '14px', padding: '10px 22px' }} onClick={() => navigate('technology')}>
                    See Technology
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── TECHNOLOGY PAGE ──────────────────────────────────────────────────────────
function TechnologyPage({ navigate }: { navigate: (p: Page) => void }) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  const hotspots = [
    { label: 'Liquid Crystal Array', x: '25%', y: '35%', desc: 'A 64×64 array of individually addressable liquid crystal micro-cells form the adaptive optic element. Each cell is only 200μm × 200μm.' },
    { label: 'Electrochemical Sensors', x: '65%', y: '45%', desc: '12 nano-fabricated electrochemical biosensors embedded in the hydrogel matrix. Gold and platinum electrodes measure IOP, glucose, pH, and 9 other biomarkers.' },
    { label: 'Micro-CPU', x: '45%', y: '65%', desc: 'Custom RISC-V silicon at 5nm. Achieves 2.4 TOPS at only 0.3mW. Neural inference runs entirely on-device with no cloud latency.' },
    { label: 'Photovoltaic Ring', x: '15%', y: '65%', desc: 'A thin-film amorphous silicon ring harvests ambient light to supplement battery charging during outdoor use, extending wear time by up to 3 hours.' },
    { label: 'BLE 5.3 Antenna', x: '75%', y: '25%', desc: 'A loop antenna etched into the lens rim enables secure, low-energy Bluetooth communication with paired devices within 5 meters.' },
  ]

  const layers = [
    { name: 'AI', title: 'Artificial Intelligence', color: '#2563EB', desc: 'On-device neural networks handle vision correction, health anomaly detection, and HUD rendering without any cloud dependency.' },
    { name: 'Sensors', title: 'Micro Sensor Array', color: '#10B981', desc: '12 nano-scale biosensors continuously sample ocular biomarkers at 60Hz, providing a continuous stream of health data.' },
    { name: 'Battery', title: 'Solid-State Micro Battery', color: '#F5A742', desc: 'A 0.1mAh solid-state lithium cell occupying just 0.8mm³ powers the entire system for 18 hours on a single charge.' },
    { name: 'Wireless', title: 'Wireless Communication', color: '#38BDF8', desc: 'Bluetooth 5.3 LE Audio provides encrypted data transmission to the companion app with end-to-end zero-knowledge security.' },
  ]

  return (
    <div className="pt-20">
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0F2544, #1B3A6B)' }}>
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8' }}>Engineering</div>
        <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1px' }}>
          Inside the <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Airis Lens</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
          More than a lens. A complete computing platform that fits on your eye.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Interactive diagram */}
        <div className="text-center mb-8">
          <h2 className="section-title mb-3">Interactive <span className="gradient-text">Lens Diagram</span></h2>
          <p className="section-subtitle">Click the hotspots to explore each component.</p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-20" style={{ aspectRatio: '1/0.7' }}>
          {/* Lens visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="rounded-full"
              style={{
                width: '60%',
                aspectRatio: '1',
                background: 'radial-gradient(circle at 35% 35%, rgba(56,189,248,0.3), rgba(37,99,235,0.1) 60%, rgba(56,189,248,0.05))',
                border: '2px solid rgba(56,189,248,0.4)',
                boxShadow: '0 0 60px rgba(56,189,248,0.2), inset 0 0 40px rgba(56,189,248,0.1)',
              }}
            />
          </div>

          {/* Hotspots */}
          {hotspots.map((h, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: h.x, top: h.y, transform: 'translate(-50%, -50%)', zIndex: activeHotspot === i ? 20 : 10 }}
            >
              <button
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white animate-pulse-glow"
                style={{ background: '#2563EB', boxShadow: '0 0 0 4px rgba(37,99,235,0.25)' }}
                onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
              >
                {i + 1}
              </button>
              {activeHotspot === i && (
                <div
                  className="absolute rounded-xl p-4 w-52 animate-fade-in"
                  style={{
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                    border: '1px solid #E5E7EB',
                    marginTop: 8,
                    zIndex: 30,
                  }}
                >
                  <div className="font-semibold text-sm mb-1.5" style={{ color: '#111827' }}>{h.label}</div>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{h.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tech layers */}
        <div className="text-center mb-8">
          <h2 className="section-title mb-3">Core <span className="gradient-text">Technologies</span></h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {layers.map(l => (
            <div key={l.name} className="card-hover rounded-2xl p-7" style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}>
              <div className="inline-flex px-2.5 py-1 rounded-lg text-xs font-bold mb-3" style={{ background: l.color + '15', color: l.color }}>{l.name}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#111827' }}>{l.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary" onClick={() => navigate('waitlist')}>Request Technical Whitepaper →</button>
        </div>
      </div>
    </div>
  )
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  const team = [
    { name: 'Timila', role: 'Co-founder & CEO', emoji: '👩🏾‍💼', bio: 'Former VP of Hardware at Google X. MIT PhD in Biomedical Engineering.' },
    { name: 'Ryuu', role: 'Co-founder & CTO', emoji: '👨🏻‍💻', bio: 'Ex-Apple Silicon architect. Stanford PhD in Nanofabrication.' },
    { name: 'THNS', role: 'Chief Medical Officer', emoji: '👩🏽‍⚕️', bio: 'Board-certified ophthalmologist. 15 years at Mayo Clinic Eye Center.' },
    { name: 'Charlie', role: 'VP Design', emoji: '👨🏼‍🎨', bio: 'Former Lead Designer at Apple Health and Nike Innovation.' },
    { name: 'GLay', role: 'Head of AI Research', emoji: '👩🏻‍🔬', bio: 'DeepMind alumni. Specialist in edge inference and biometric AI.' },
    { name: 'Thura', role: 'VP Clinical Trials', emoji: '👨🏫', bio: '20-year track record running FDA pivotal trials in ophthalmology.' },
  ]

  const timeline = [
    { year: '2019', event: 'Airis founded by Dr. Osei and Dr. Watanabe in a Stanford lab' },
    { year: '2020', event: '$12M seed round. First working prototype demonstrated' },
    { year: '2021', event: '$65M Series A. FDA Breakthrough Device Designation received' },
    { year: '2022', event: 'Phase I/II clinical trials begin across 6 countries' },
    { year: '2023', event: '$180M Series B. 18,000+ early access applications' },
    { year: '2024', event: 'Phase III trials complete. CE Mark submitted' },
    { year: '2025', event: 'FDA Pre-Market Approval submitted. ISO 13485 certified' },
    { year: '2027', event: 'Commercial launch planned in 5 markets' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0F2544, #1B3A6B)' }}>
        <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1px' }}>
          Our <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mission</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
          We believe preventive healthcare begins with continuous, non-invasive monitoring. Airis puts a medical-grade sensor suite on every eye, every day — so disease is caught before symptoms appear.
        </p>
      </div>

      {/* Stats */}
      <div className="py-16 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[['18K+', 'Waitlist Members'], ['65+', 'Patents Filed'], ['4,200+', 'Clinical Trial Participants'], ['$257M', 'Total Raised']].map(([v, l]) => (
            <div key={l} className="text-center rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
              <div className="font-extrabold text-3xl mb-1 gradient-text">{v}</div>
              <div className="text-sm" style={{ color: '#6B7280' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12">Our <span className="gradient-text">Journey</span></h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #2563EB, #38BDF8, #10B981)' }} />
            <div className="flex flex-col gap-6">
              {timeline.map((t, i) => (
                <div key={i} className="pl-16 relative">
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-white" style={{ background: '#2563EB', boxShadow: '0 0 0 3px rgba(37,99,235,0.2)' }} />
                  <div className="text-xs font-bold mb-0.5" style={{ color: '#2563EB' }}>{t.year}</div>
                  <div className="text-sm" style={{ color: '#374151' }}>{t.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 px-6" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Meet the <span className="gradient-text">Team</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(m => (
              <div key={m.name} className="card-hover rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #E5E7EB', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
                <div className="text-4xl mb-3">{m.emoji}</div>
                <div className="font-bold text-lg mb-0.5" style={{ color: '#111827' }}>{m.name}</div>
                <div className="text-sm font-medium mb-3" style={{ color: '#2563EB' }}>{m.role}</div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 text-center px-6">
        <h2 className="font-bold text-2xl mb-4" style={{ color: '#111827' }}>Ready to see the future?</h2>
        <button className="btn-primary" style={{ fontSize: '16px', padding: '14px 32px' }} onClick={() => navigate('waitlist')}>
          Join the Waitlist
        </button>
      </div>
    </div>
  )
}

// ─── FAQ PAGE ─────────────────────────────────────────────────────────────────
function FAQPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openItem, setOpenItem] = useState<number | null>(null)

  const categories = ['All', 'Eye Safety', 'Technology', 'Pricing', 'Compatibility', 'Shipping']

  const allFaqs = [
    { q: 'Is Airis safe to wear?', a: 'Airis has undergone extensive clinical trials across 18 countries with over 4,000 participants. All materials are ISO 13485 certified and the device received FDA Breakthrough Device Designation. Zero adverse events were reported in Phase III trials.', category: 'Eye Safety' },
    { q: 'Can I wear Airis while sleeping?', a: 'Airis is approved for daily wear only — a maximum of 16 hours per day. Extended overnight wear is not recommended. The lens must be removed and placed in the charging case each night.', category: 'Eye Safety' },
    { q: 'Are the electronics safe near my eye?', a: 'All electronic components operate at frequencies and power levels well below international safety thresholds (IEC 62209). The lens emits 0.003mW of RF power — 10,000× below safety limits.', category: 'Eye Safety' },
    { q: 'How does the AI processor work inside the lens?', a: 'The custom 5nm RISC-V processor performs all computation on-device. Vision correction runs at 120Hz, health monitoring at 60Hz, and emergency detection at 250Hz. No raw biometric data ever leaves the lens.', category: 'Technology' },
    { q: 'Does it work with my smartphone?', a: 'Airis is compatible with any Bluetooth 5.0+ smartphone running iOS 16+ or Android 12+. The companion app is available for iPhone, Samsung, Google Pixel, and all Android devices meeting the minimum spec.', category: 'Compatibility' },
    { q: 'Can Airis replace my current prescription?', a: 'Yes. Airis is available in a wide range of prescriptions and our adaptive optics extend correction beyond fixed powers. Many users with mild prescriptions find they no longer need glasses for any activity.', category: 'Eye Safety' },
    { q: 'How much will Airis cost?', a: 'Pricing has not been finalized. Based on comparable medical devices, we anticipate a starter kit price of $299–$499 with subscription health monitoring from $19/month. Early access members receive a 30% discount.', category: 'Pricing' },
    { q: 'Is health insurance coverage expected?', a: 'We are actively working with major US and EU insurers on reimbursement codes. For patients with diagnosed glaucoma or diabetes, coverage may be available through HSA/FSA accounts immediately upon launch.', category: 'Pricing' },
    { q: 'When will Airis ship?', a: 'Commercial launch is planned for Q2 2027, initially in the US, EU, UK, Japan, and Australia. Early access waitlist members will be the first notified and offered priority shipping.', category: 'Shipping' },
    { q: 'Will Airis work with Android devices?', a: 'Yes. Full Android support is available for Android 12+ devices with Bluetooth 5.0. The companion app is available on Google Play and Samsung Galaxy Store.', category: 'Compatibility' },
  ]

  const filtered = allFaqs.filter(f =>
    (activeCategory === 'All' || f.category === activeCategory) &&
    (search === '' || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="pt-20">
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0F2544, #1B3A6B)' }}>
        <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1px' }}>
          Frequently Asked <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Questions</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Everything you need to know about Airis.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <span className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>🔍</span>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-5 py-3.5 rounded-xl text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)', color: '#fff', fontFamily: 'inherit' }}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: activeCategory === c ? '#2563EB' : '#F8FAFC',
                color: activeCategory === c ? '#fff' : '#6B7280',
                border: '1px solid ' + (activeCategory === c ? '#2563EB' : '#E5E7EB'),
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16" style={{ color: '#9CA3AF' }}>
            <div className="text-4xl mb-3">🔍</div>
            <p>No questions found for "{search}"</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid #E5E7EB', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                >
                  <div>
                    <span className="text-xs font-semibold mr-2 px-2 py-0.5 rounded-full" style={{ background: '#EFF6FF', color: '#2563EB' }}>{item.category}</span>
                    <span className="font-semibold" style={{ color: '#111827' }}>{item.q}</span>
                  </div>
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300" style={{ color: '#2563EB', transform: openItem === i ? 'rotate(180deg)' : 'none' }}>⌄</span>
                </button>
                <div className="accordion-content" style={{ maxHeight: openItem === i ? '300px' : '0', opacity: openItem === i ? 1 : 0 }}>
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-20">
      <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0F2544, #1B3A6B)' }}>
        <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1px' }}>
          Get in <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Touch</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Questions, press enquiries, or partnership opportunities. We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="font-bold text-2xl mb-6" style={{ color: '#111827' }}>Send Us a Message</h2>

          {sent ? (
            <div className="rounded-2xl p-10 text-center animate-fade-in" style={{ background: '#F0FDF4', border: '1px solid #BBF7D0' }}>
              <div className="text-5xl mb-4">✅</div>
              <div className="font-bold text-xl mb-2" style={{ color: '#15803D' }}>Message Sent!</div>
              <p className="text-sm" style={{ color: '#166534' }}>We'll reply to {form.email} within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Jane Smith' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'jane@example.com' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={(form as Record<string, string>)[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                    style={{ background: '#F8FAFC', border: '1.5px solid #E5E7EB', fontFamily: 'inherit' }}
                    onFocus={e => (e.target.style.borderColor = '#2563EB')}
                    onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  required
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-150"
                  style={{ background: '#F8FAFC', border: '1.5px solid #E5E7EB', fontFamily: 'inherit' }}
                  onFocus={e => (e.target.style.borderColor = '#2563EB')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>
              <button type="submit" className="btn-primary w-full" style={{ padding: '14px', fontSize: '15px' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right */}
        <div>
          <h2 className="font-bold text-2xl mb-6" style={{ color: '#111827' }}>Contact Information</h2>

          <div className="flex flex-col gap-5 mb-8">
            {[
              { icon: '📍', label: 'Address', value: 'Siam University, Global Academy , 38 Phet Kasem Rd, Bang Wa, Phasi Charoen, Bangkok 10160, Thailand' },
              { icon: '📧', label: 'Email', value: '1234@ga.edu' },
              { icon: '📞', label: 'Phone', value: '+66 06123456' },
              { icon: '⏰', label: 'Hours', value: 'Mon–Fri, 9am–6pm PT' },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="text-xl mt-0.5">{c.icon}</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#9CA3AF' }}>{c.label}</div>
                  <div className="text-sm" style={{ color: '#374151' }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ height: 240, background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', border: '1px solid #BFDBFE' }}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">🗺</div>
              <div className="text-sm font-medium" style={{ color: '#1D4ED8' }}>Bangkok, Thailand</div>
              <div className="text-xs mt-1" style={{ color: '#60A5FA' }}>Global Academy</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mt-6">
            {[['𝕏', 'Twitter'], ['in', 'LinkedIn'], ['▶', 'YouTube'], ['f', 'Facebook']].map(([icon, label]) => (
              <button
                key={label}
                className="flex-1 py-3 rounded-xl flex flex-col items-center gap-1 transition-all duration-200"
                style={{ background: '#F8FAFC', border: '1px solid #E5E7EB' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#EFF6FF'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#2563EB' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#F8FAFC'; (e.currentTarget as HTMLButtonElement).style.borderColor = '#E5E7EB' }}
              >
                <span className="font-bold text-sm">{icon}</span>
                <span className="text-xs" style={{ color: '#6B7280' }}>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── WAITLIST PAGE ────────────────────────────────────────────────────────────
function WaitlistPage({ navigate }: { navigate: (p: Page) => void }) {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', country: '', occupation: '', agreed: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Singapore', 'Other']
  const occupations = ['Healthcare Professional', 'Patient / Individual', 'Researcher / Academic', 'Industry / Tech', 'Investor', 'Media / Press', 'Other']

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = 'Required'
    if (!form.lastName.trim()) e.lastName = 'Required'
    if (!form.email.includes('@')) e.email = 'Enter a valid email'
    if (!form.country) e.country = 'Please select a country'
    if (!form.occupation) e.occupation = 'Please select an occupation'
    if (!form.agreed) e.agreed = 'You must agree to the Privacy Policy'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('success') }, 1400)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
  const inputStyle = (key: string) => ({
    background: '#F8FAFC',
    border: '1.5px solid ' + (errors[key] ? '#EF4444' : '#E5E7EB'),
    fontFamily: 'inherit',
  })

  return (
    <div className="pt-20 min-h-screen" style={{ background: '#F8FAFC' }}>
      {/* Header */}
      <div className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0F2544, #1B3A6B)' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow inline-block" />
          Limited Early Access — 18,247 on waitlist
        </div>
        <h1 className="font-extrabold text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1px' }}>
          Join the Airis <span style={{ background: 'linear-gradient(135deg, #38BDF8, #10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Early Access Program</span>
        </h1>
        <p className="max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Early access members receive 30% off retail price, priority shipping, and exclusive beta features.
        </p>
      </div>

      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="rounded-3xl p-8 md:p-10" style={{ background: '#fff', boxShadow: '0 8px 48px rgba(0,0,0,0.08)', border: '1px solid #E5E7EB' }}>
          <h2 className="font-bold text-xl mb-6" style={{ color: '#111827' }}>Application Form</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>First Name</label>
                <input type="text" placeholder="Jane" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className={inputClass} style={inputStyle('firstName')} onFocus={e => (e.target.style.borderColor = '#2563EB')} onBlur={e => (e.target.style.borderColor = errors.firstName ? '#EF4444' : '#E5E7EB')} />
                {errors.firstName && <p className="text-xs mt-1 text-red-500">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>Last Name</label>
                <input type="text" placeholder="Smith" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className={inputClass} style={inputStyle('lastName')} onFocus={e => (e.target.style.borderColor = '#2563EB')} onBlur={e => (e.target.style.borderColor = errors.lastName ? '#EF4444' : '#E5E7EB')} />
                {errors.lastName && <p className="text-xs mt-1 text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>Email Address</label>
              <input type="email" placeholder="jane@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} style={inputStyle('email')} onFocus={e => (e.target.style.borderColor = '#2563EB')} onBlur={e => (e.target.style.borderColor = errors.email ? '#EF4444' : '#E5E7EB')} />
              {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>Country</label>
              <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} className={inputClass} style={{ ...inputStyle('country'), cursor: 'pointer' }}>
                <option value="">Select your country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.country && <p className="text-xs mt-1 text-red-500">{errors.country}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>Occupation</label>
              <select value={form.occupation} onChange={e => setForm({ ...form, occupation: e.target.value })} className={inputClass} style={{ ...inputStyle('occupation'), cursor: 'pointer' }}>
                <option value="">Select your occupation</option>
                {occupations.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
              {errors.occupation && <p className="text-xs mt-1 text-red-500">{errors.occupation}</p>}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={form.agreed}
                    onChange={e => setForm({ ...form, agreed: e.target.checked })}
                    className="sr-only"
                  />
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center transition-all duration-150"
                    style={{
                      background: form.agreed ? '#2563EB' : '#fff',
                      border: '2px solid ' + (errors.agreed ? '#EF4444' : form.agreed ? '#2563EB' : '#D1D5DB'),
                    }}
                    onClick={() => setForm(f => ({ ...f, agreed: !f.agreed }))}
                  >
                    {form.agreed && <span className="text-white text-xs font-bold">✓</span>}
                  </div>
                </div>
                <span className="text-sm" style={{ color: '#6B7280' }}>
                  I agree to the <span style={{ color: '#2563EB', cursor: 'pointer' }}>Privacy Policy</span> and consent to being contacted about Airis products and updates.
                </span>
              </label>
              {errors.agreed && <p className="text-xs mt-1 text-red-500">{errors.agreed}</p>}
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-2 flex items-center justify-center gap-2"
              style={{ padding: '15px', fontSize: '15px', opacity: loading ? 0.8 : 1 }}
            >
              {loading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                'Join Waitlist →'
              )}
            </button>
          </form>

          <p className="text-xs text-center mt-4" style={{ color: '#9CA3AF' }}>
            No spam, ever. Unsubscribe at any time. By joining you agree to our terms.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── SUCCESS PAGE ─────────────────────────────────────────────────────────────
function SuccessPage({ navigate }: { navigate: (p: Page) => void }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let val = 0
    const interval = setInterval(() => {
      val += Math.ceil((18247 - val) / 20)
      if (val >= 18248) { setCount(18248); clearInterval(interval) }
      else setCount(val)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center px-6" style={{ background: 'linear-gradient(135deg, #F0F9FF, #EFF6FF, #F0FDF4)' }}>
      <div className="max-w-lg w-full text-center">
        {/* Animated check */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              boxShadow: '0 0 0 12px rgba(16,185,129,0.12), 0 0 0 24px rgba(16,185,129,0.06)',
            }}
          >
            <span className="text-5xl text-white">✓</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: 'rgba(16,185,129,0.1)', color: '#059669' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse-glow" />
          Application Received
        </div>

        <h1 className="font-extrabold mb-4" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#111827', letterSpacing: '-1px' }}>
          Thank You! 🎉
        </h1>

        <p className="text-lg mb-3 leading-relaxed" style={{ color: '#374151' }}>
          You've successfully joined the Airis Early Access Program.
        </p>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
          We'll email you with updates, launch date announcements, and your exclusive 30% early access discount when we're ready to ship.
        </p>

        {/* Counter */}
        <div className="rounded-2xl p-6 mb-8" style={{ background: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', border: '1px solid #E5E7EB' }}>
          <div className="font-extrabold text-4xl mb-1 gradient-text">{count.toLocaleString()}+</div>
          <div className="text-sm" style={{ color: '#6B7280' }}>people ahead of you on the waitlist</div>
          <div className="mt-3 text-xs px-3 py-1 rounded-full inline-block" style={{ background: '#EFF6FF', color: '#2563EB' }}>
            You're in the top 3% of applicants
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary" style={{ fontSize: '15px', padding: '13px 28px' }} onClick={() => navigate('home')}>
            ← Return Home
          </button>
          <button className="btn-secondary" style={{ fontSize: '15px', padding: '13px 28px' }} onClick={() => navigate('features')}>
            Explore Features
          </button>
        </div>

        {/* Share */}
        <div className="mt-10 pt-8" style={{ borderTop: '1px solid #E5E7EB' }}>
          <p className="text-sm mb-4" style={{ color: '#6B7280' }}>Share Airis with your network</p>
          <div className="flex justify-center gap-3">
            {[['𝕏', '#1DA1F2'], ['in', '#0A66C2'], ['f', '#1877F2']].map(([icon, color]) => (
              <button
                key={icon}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all duration-200 hover:scale-110"
                style={{ background: color }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
      {page !== 'success' && <Nav current={page} navigate={navigate} />}

      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'features' && <FeaturesPage navigate={navigate} />}
      {page === 'technology' && <TechnologyPage navigate={navigate} />}
      {page === 'about' && <AboutPage navigate={navigate} />}
      {page === 'faq' && <FAQPage />}
      {page === 'contact' && <ContactPage />}
      {page === 'waitlist' && <WaitlistPage navigate={navigate} />}
      {page === 'success' && <SuccessPage navigate={navigate} />}

      {page !== 'success' && <Footer navigate={navigate} />}
    </div>
  )
}
