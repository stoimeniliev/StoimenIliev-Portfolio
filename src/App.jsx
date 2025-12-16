import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Cpu, Sparkles, Smile, ArrowRight, Video, Rocket } from 'lucide-react';
import './index.css';

const projects = {
  productivity: [
    {
      id: 1,
      title: 'Zfit - Zalando AI Try on',
      description: 'A Chrome extension that brings virtual try-on to Zalando. Upload a photo of yourself and see how clothes would look on you before buying. Built with AI-powered image generation to create realistic visualizations.',
      youtubeId: 'Fgr7ugdvEtw',
      github: 'https://github.com/stoimeniliev/zfit',
      demo: null,
      tags: ['Chrome Extension', 'Supabase', 'Node.js', 'AI/ML']
    },
    {
      id: 2,
      title: 'xScheduler',
      description: 'xScheduler is a native macOS app that lets you draft, schedule, and publish posts to X.com / Twitter',
      youtubeId: 'kx1aOj6oC7U',
      github: 'https://github.com/stoimeniliev/tweetscheduler',
      demo: null,
      tags: ['Swift', 'X.com API', 'Supabase', 'Github Actions']
    },
    {
      id: 3,
      title: 'Superhero',
      description: 'An open-source alternative to Grammarly and Superhuman. Fastest way to use AI on your computer. One click custom prompts to enhance all of your workflows',
      youtubeId: 'Q_58h_yuKOs',
      github: 'https://github.com/stoimeniliev/superhero',
      demo: null,
      tags: ['Swift']
    }
  ],
  meme: [
    {
      id: 1,
      title: 'Notepad Ultra',
      description: 'A parody text editor that satirizes the aggressive subscription models of modern software. Want to use backspace? That\'ll be $2.99/month. Spell-check? Premium feature. Auto-save? Subscribe to our Ultra tier. A commentary on the state of software pricing.',
      youtubeId: null,
      github: 'https://github.com/stoimeniliev/NotepadUltra',
      demo: 'https://stoimeniliev.github.io/NotepadUltra/',
      tags: ['React', 'Satire', 'Web App']
    },
    {
      id: 2,
      title: 'Folder Ultra',
      description: 'The file manager that charges you per folder. Drag and drop? Premium. See file sizes? That\'s a subscription. A satirical take on how every basic feature is becoming a paid add-on.',
      youtubeId: null,
      github: 'https://github.com/stoimeniliev/folder-ultra',
      demo: 'https://stoimeniliev.github.io/folder-ultra/',
      tags: ['React', 'Parody', 'UX Satire']
    },
    {
      id: 3,
      title: 'Breathify',
      description: 'The AI excuse generator. Running late? Need to skip a meeting? Breathify generates wildly plausible excuses on demand. "My building\'s fire alarm went off" or "There was a water main break on my street" - all with convincing detail.',
      youtubeId: null,
      github: null,
      demo: null,
      tags: ['AI', 'Humor', 'GPT-4']
    }
  ]
};

const heroImages = [
  {
    src: '/images/getsafe.png',
    caption: 'Getsafe strategy day talking about product strategy'
  },
  {
    src: '/images/trade-republic.jpg',
    caption: 'Trade Republic, pre-launch Web Trading'
  },
  {
    src: '/images/cornell.jpg',
    caption: 'At Cornell, Roosevelt Island'
  }
];

// Polaroid photo configurations for the wall effect
const polaroidConfigs = [
  { rotate: -8, translateX: 25, translateY: 10, zIndex: 1 },   // Left photo - tilts left
  { rotate: 0, translateX: 0, translateY: -5, zIndex: 2 },     // Center photo - straight
  { rotate: 6, translateX: -25, translateY: 15, zIndex: 1 },   // Right photo - tilts right
];

const Section = ({ title, children, id, icon: Icon }) => (
  <section id={id} className="py-16 md:py-20 lg:py-24 2xl:py-32 px-4">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 mb-10 md:mb-12 lg:mb-14 2xl:mb-18"
      >
        {Icon && <Icon className="w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 text-rose-400" />}
        <h2 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-center mb-0">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

// New horizontal project layout with video embed
const ProjectRow = ({ project, index, isReversed = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
  >
    {/* Left side - Info */}
    <div className={`space-y-5 lg:space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
      <h3 className="text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-bold text-gray-800">{project.title}</h3>
      <p className="text-gray-500 text-base md:text-lg lg:text-lg 2xl:text-xl leading-relaxed">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:gap-2.5">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 bg-rose-50 rounded-full text-xs md:text-sm 2xl:text-base text-rose-600 border border-rose-100 font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-700 transition-colors"
          >
            <ExternalLink size={18} /> Try It
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 transition-colors border border-gray-200"
          >
            <Github size={18} /> View Code
          </a>
        )}
        {project.youtubeId && (
          <a
            href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm md:text-base hover:bg-red-700 transition-colors"
          >
            <Video size={18} /> Watch Video
          </a>
        )}
      </div>
    </div>

    {/* Right side - Video/Preview */}
    <div className={`${isReversed ? 'lg:order-1' : ''}`}>
      {project.youtubeId ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gradient-to-br from-rose-100 to-violet-100 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <p className="text-gray-600 font-medium">Demo coming soon</p>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-rose-600 font-bold hover:text-rose-700"
              >
                Try it now <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

// Polaroid Photo Component
const PolaroidPhoto = ({ image, index, config }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotate: config.rotate }}
    animate={{ opacity: 1, y: 0, rotate: config.rotate }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{
      scale: 1.05,
      rotate: 0,
      zIndex: 10,
      y: -8,
    }}
    style={{
      transform: `translateX(${config.translateX}px) translateY(${config.translateY}px) rotate(${config.rotate}deg)`,
      zIndex: config.zIndex,
    }}
    className="polaroid-photo"
  >
    <div className="polaroid-frame">
      <div className="polaroid-image-container">
        <img
          src={image.src}
          alt={image.caption}
          className="polaroid-image"
        />
      </div>
      <div className="polaroid-caption">
        <p>{image.caption}</p>
      </div>
    </div>
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-lg border-b border-gray-200/50">
        <div className="container flex items-center justify-between h-14 md:h-16 lg:h-18 2xl:h-24">
          <span className="font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl tracking-tight text-gray-800">Stoimen<span className="text-rose-500">Iliev</span></span>
          <div className="hidden md:flex gap-5 lg:gap-8 2xl:gap-10 text-sm lg:text-base 2xl:text-xl font-medium text-gray-600">
            <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
            <a href="#productivity" className="hover:text-rose-500 transition-colors">Work</a>
            <a href="#fun" className="hover:text-rose-500 transition-colors">Fun</a>
          </div>
          {/* Mobile Menu Icon (Placeholder) */}
          <div className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[auto] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-5 w-40 h-40 md:w-80 md:h-80 2xl:w-[36rem] 2xl:h-[36rem] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-5 w-40 h-40 md:w-80 md:h-80 2xl:w-[36rem] 2xl:h-[36rem] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-40 h-40 md:w-80 md:h-80 2xl:w-[36rem] 2xl:h-[36rem] bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 2xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-rose-500 font-medium mb-2 md:mb-3 lg:mb-5 2xl:mb-6 tracking-wide uppercase text-xs md:text-sm lg:text-xs 2xl:text-xl">Product Leader, Vibe Coder & AI Enthusiast</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[50px] 2xl:text-9xl font-bold mb-4 md:mb-5 lg:mb-7 2xl:mb-10 leading-tight text-gray-800">
              Hi 👋 <br />
              <span className="gradient-text">I'm Tito!</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg 2xl:text-2xl mb-5 md:mb-7 lg:mb-10 2xl:mb-12 max-w-md md:max-w-xl 2xl:max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 md:px-0">
            I build products that customers love, teams thrive on, and businesses grow from. <br /><br /> I'm currently on a career break & experiment with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5 2xl:gap-6 justify-center lg:justify-start">
              <a href="#productivity" className="bg-gray-800 text-white px-6 py-3 md:px-8 md:py-3.5 2xl:px-12 2xl:py-5 rounded-full font-bold text-sm md:text-base lg:text-lg 2xl:text-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 2xl:gap-3">
                Fun projects ↓ <ArrowRight className="w-4 h-4 md:w-5 md:h-5 2xl:w-7 2xl:h-7" />
              </a>
              <div className="flex gap-3 md:gap-4 justify-center">
                <a href="#" className="p-3 md:p-3.5 2xl:p-5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 text-gray-600"><Github className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" /></a>
                <a href="#" className="p-3 md:p-3.5 2xl:p-5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 text-gray-600"><Linkedin className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" /></a>
                <a href="#" className="p-3 md:p-3.5 2xl:p-5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 text-gray-600"><Mail className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" /></a>
              </div>
            </div>
          </motion.div>

          {/* Polaroid Photo Wall */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center py-8 lg:py-0"
          >
            <div className="polaroid-wall">
              {heroImages.map((image, index) => (
                <PolaroidPhoto
                  key={index}
                  image={image}
                  index={index}
                  config={polaroidConfigs[index]}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me" icon={Cpu}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 2xl:gap-20 items-start">
          <div className="space-y-5 lg:space-y-6 2xl:space-y-8 text-gray-600 text-base md:text-lg lg:text-lg 2xl:text-2xl text-center lg:text-left">
            <p>
              With over 15 years building products as a product manager, software engineer and solopreneur - I focus on turning complex technology into intuitive experiences that scale.
            </p>
            <p>
              I've built zero-to-one products, led cross-functional teams, and helped companies grow from early-stage momentum to millions of users. Currently really passionate about AI.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 2xl:gap-8 mt-8 lg:mt-10 2xl:mt-14">
              <div className="p-4 lg:p-6 2xl:p-8 bg-white rounded-xl 2xl:rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-3xl lg:text-4xl 2xl:text-6xl font-bold text-gray-800 mb-1 lg:mb-2 2xl:mb-3">15y+</h4>
                <div className="text-sm lg:text-base 2xl:text-xl text-gray-500">Experience</div>
              </div>
              <div className="p-4 lg:p-6 2xl:p-8 bg-white rounded-xl 2xl:rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-3xl lg:text-4xl 2xl:text-6xl font-bold text-gray-800 mb-1 lg:mb-2 2xl:mb-3">Zero</h4>
                <div className="text-sm lg:text-base 2xl:text-xl text-gray-500">To One</div>
              </div>
            </div>
            {/* Cornell - moved to left column for balance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 lg:gap-5 2xl:gap-6 p-4 lg:p-5 2xl:p-8 rounded-xl lg:rounded-xl 2xl:rounded-2xl bg-white border border-gray-100 shadow-sm mt-4 lg:mt-6"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden bg-white">
                <img src="https://images.seeklogo.com/logo-png/19/2/cornell-university-logo-png_seeklogo-190243.png" alt="Cornell University" className="w-full h-full object-contain p-2" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-base lg:text-xl 2xl:text-2xl text-gray-800 mb-1.5 lg:mb-2 2xl:mb-3">
                  Cornell University — MBA <span className="text-gray-400 font-normal text-sm lg:text-base 2xl:text-xl ml-1">(2019 – 2020)</span>
                </h4>
                <p className="text-gray-500 text-sm lg:text-base 2xl:text-lg leading-relaxed">Merit-based scholarship + Fulbright. Focus on Leadership, Strategy, and AI.</p>
              </div>
            </motion.div>
          </div>
          <div className="space-y-4 lg:space-y-4 2xl:space-y-6">
            {/* Career Timeline - now without Cornell */}
            {[
              {
                company: 'Getsafe',
                year: '2024 – 2025',
                logo: 'https://cdn.sanity.io/images/p4gom3ch/production/9506e19db1103f9aad924d7f4d8ad11467b232ca-416x416.png?w=208&h=208&auto=format',
                desc: 'Product Lead for Growth, Engagement, and Monetisation. Shipped the Safepoints rewards program and the Freemium Travel Insurance product, expanding activation and top-of-funnel reach.'
              },
              {
                company: 'Trade Republic',
                year: '2021 – 2024',
                logo: 'https://i0.wp.com/fintech-consult.com/wp-content/uploads/2021/07/Trade-Republic.png',
                desc: 'One of the first customer-facing PMs during hyper-growth (joined when <40 Tech Org, <100k users). Delivered core zero-to-one initiatives including the Web Trading Platform, a unified internal workspace used company-wide, and an AI-first customer service system that replaced Zendesk.'
              },
              {
                company: 'Product manager, Software Engineer, Solopreneur',
                year: '2009 – 2019',
                icon: Rocket,
                color: 'text-purple-400',
                bg: 'bg-purple-500/20',
                desc: 'A decade of experience as a founder, full-stack engineer, and product builder across various companies and projects.'
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 lg:gap-5 2xl:gap-6 p-4 lg:p-5 2xl:p-8 rounded-xl lg:rounded-xl 2xl:rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-gray-100 hover:shadow-sm"
              >
                <div className={`w-12 h-12 lg:w-14 lg:h-14 2xl:w-20 2xl:h-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden ${job.logo ? 'bg-white' : `${job.bg} ${job.color}`}`}>
                  {job.logo ? (
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain p-2" />
                  ) : (
                    <job.icon className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-10 2xl:h-10" />
                  )}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-base lg:text-xl 2xl:text-2xl text-gray-800 mb-1.5 lg:mb-2 2xl:mb-3">
                    {job.company} <span className="text-gray-400 font-normal text-sm lg:text-base 2xl:text-xl ml-1">({job.year})</span>
                  </h4>
                  <p className="text-gray-500 text-sm lg:text-base 2xl:text-lg leading-relaxed">{job.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Productivity Projects */}
      <Section id="productivity" title="AI Playground" icon={Sparkles}>
        <p className="text-center text-gray-500 max-w-3xl 2xl:max-w-4xl mx-auto mb-12 lg:mb-16 2xl:mb-20 text-base md:text-lg lg:text-lg 2xl:text-2xl">
        I vibe code tools to make life a little easier. No gatekeeping - every bit of code is available on my GitHub. My workflow is a combination of Cursor, Antigravity, Xcode, Gemini, ChatGPT, Supabase, Vercel, Replicate.com
        </p>
        <div className="space-y-16 lg:space-y-20 2xl:space-y-24">
          {projects.productivity.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} isReversed={index % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* Meme Projects */}
      <Section id="fun" title="Parody Apps" icon={Smile}>
        <p className="text-center text-gray-500 max-w-3xl 2xl:max-w-4xl mx-auto mb-12 lg:mb-16 2xl:mb-20 text-base md:text-lg lg:text-lg 2xl:text-2xl">
          Same as above, but poking fun at the absurd subscription models and microtransactions in modern software.
        </p>
        <div className="space-y-16 lg:space-y-20 2xl:space-y-24">
          {projects.meme.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} isReversed={index % 2 === 1} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 lg:py-14 2xl:py-20 border-t border-gray-200 bg-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-bold mb-6 lg:mb-8 2xl:mb-12 text-gray-800">Let's Build Something Amazing</h2>
          <div className="flex justify-center gap-5 lg:gap-6 2xl:gap-8 mb-6 lg:mb-10 2xl:mb-14">
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors"><Github className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9" /></a>
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors"><Linkedin className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9" /></a>
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors"><Mail className="w-6 h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9" /></a>
          </div>
          <p className="text-gray-500 text-sm lg:text-base 2xl:text-xl">
            © {new Date().getFullYear()} Stoimen Iliev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
