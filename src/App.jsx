import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Cpu, Sparkles, Smile, ArrowRight } from 'lucide-react';
import './index.css';

const projects = {
  productivity: [
    {
      id: 1,
      title: 'TaskFlow AI',
      description: 'Intelligent task prioritization engine that adapts to your working style and energy levels.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60',
      link: '#',
      tags: ['React', 'OpenAI', 'Node.js']
    },
    {
      id: 2,
      title: 'FocusSync',
      description: 'Real-time team synchronization tool for remote product management squads.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
      link: '#',
      tags: ['Vue', 'Firebase', 'WebRTC']
    },
    {
      id: 3,
      title: 'DataViz Pro',
      description: 'Automated dashboard generator turning CSVs into beautiful actionable insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      link: '#',
      tags: ['Python', 'D3.js', 'FastAPI']
    }
  ],
  meme: [
    {
      id: 1,
      title: 'CatGPT',
      description: 'Finally understand what your cat is meowing about. Powered by fine-tuned models on meow-datasets.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=60',
      link: '#',
      tags: ['Meow', 'GPT-4', 'React']
    },
    {
      id: 2,
      title: 'Potatoifier',
      description: 'Uses advanced computer vision to turn your friends into high-resolution potatoes.',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60',
      link: '#',
      tags: ['CV works', 'Python', 'Potato']
    },
    {
      id: 3,
      title: 'ExcuseGenerator 3000',
      description: 'Never be late without a valid reason again. Generates wildly plausible excuses on demand.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60',
      link: '#',
      tags: ['AI', 'Humor', 'Svelte']
    }
  ]
};

const Section = ({ title, children, id, icon: Icon }) => (
  <section id={id} className="py-16 md:py-20 lg:py-24 2xl:py-32 px-4">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16 2xl:mb-20"
      >
        {Icon && <Icon className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 text-indigo-400" />}
        <h2 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold text-center mb-0">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="card group flex flex-col"
  >
    <div className="relative h-64 md:h-72 lg:h-80 2xl:h-[30rem] overflow-hidden shrink-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <a href={project.link} className="flex items-center gap-3 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg 2xl:text-2xl hover:bg-gray-200 transition-colors">
          View Project <ExternalLink size={20} className="2xl:w-7 2xl:h-7" />
        </a>
      </div>
    </div>
    <div className="p-6 md:p-8 lg:p-10 2xl:p-12 flex-1 flex flex-col">
      <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-bold mb-4">{project.title}</h3>
      <p className="text-gray-400 mb-6 text-lg 2xl:text-3xl flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 md:gap-3 2xl:gap-4 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 md:px-4 md:py-2 2xl:px-6 2xl:py-3 bg-white/5 rounded-full text-xs md:text-sm 2xl:text-lg text-gray-300 border border-white/10 font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container flex items-center justify-between h-16 md:h-20 lg:h-24 2xl:h-32">
          <span className="font-bold text-xl md:text-2xl lg:text-3xl 2xl:text-4xl tracking-tight">Stoimen<span className="text-indigo-500">Iliev</span></span>
          <div className="hidden md:flex gap-6 lg:gap-10 2xl:gap-12 text-base lg:text-lg 2xl:text-2xl font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#productivity" className="hover:text-white transition-colors">Work</a>
            <a href="#fun" className="hover:text-white transition-colors">Fun</a>
          </div>
          {/* Mobile Menu Icon (Placeholder) */}
          <div className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-64 h-64 md:w-96 md:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 md:w-96 md:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-64 h-64 md:w-96 md:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-indigo-400 font-medium mb-4 lg:mb-6 2xl:mb-8 tracking-wide uppercase text-sm md:text-base lg:text-xl 2xl:text-2xl">Product Manager & AI Enthusiast</h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[11rem] font-bold mb-6 lg:mb-8 2xl:mb-10 leading-tight">
              Building the <br />
              <span className="gradient-text">Future</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl 2xl:text-3xl mb-8 lg:mb-12 2xl:mb-14 max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm Stoimen. I bridge the gap between human needs and artificial intelligence, creating products that are intuitive, powerful, and slightly magical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 2xl:gap-8 justify-center lg:justify-start">
              <a href="#productivity" className="bg-white text-black px-8 py-3 md:px-10 md:py-4 2xl:px-14 2xl:py-6 rounded-full font-bold text-base md:text-lg 2xl:text-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 md:gap-3 2xl:gap-4">
                See My Work <ArrowRight className="w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
              </a>
              <div className="flex gap-4 justify-center">
                <a href="#" className="p-3 md:p-4 2xl:p-6 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"><Github className="w-5 h-5 md:w-6 md:h-6 2xl:w-9 2xl:h-9" /></a>
                <a href="#" className="p-3 md:p-4 2xl:p-6 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"><Linkedin className="w-5 h-5 md:w-6 md:h-6 2xl:w-9 2xl:h-9" /></a>
                <a href="#" className="p-3 md:p-4 2xl:p-6 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"><Mail className="w-5 h-5 md:w-6 md:h-6 2xl:w-9 2xl:h-9" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-2xl mx-auto"
          >
            <div className="aspect-square rounded-2xl md:rounded-3xl 2xl:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&auto=format&fit=crop&q=80"
                alt="Stoimen Iliev"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 2xl:bottom-12 2xl:left-12">
                <p className="font-bold text-2xl md:text-3xl 2xl:text-5xl mb-1 2xl:mb-2">Stoimen Iliev</p>
                <p className="text-gray-300 text-sm md:text-lg 2xl:text-3xl">Product Visionary</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-2 md:border-4 border-indigo-500/30 rounded-2xl md:rounded-3xl 2xl:rounded-[3rem] z-0 hidden md:block"></div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me" icon={Cpu}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-24 items-center">
          <div className="space-y-6 lg:space-y-8 2xl:space-y-10 text-gray-300 text-lg md:text-xl 2xl:text-3xl text-center lg:text-left">
            <p>
              With over 8 years of experience in product management, I specialize in translating complex technical capabilities into seamless user experiences.
            </p>
            <p>
              Currently, I am obsessed with **Generative AI** and how it can redefine productivity. I don't just manage products; I build prototypes, experiment with new models, and occasionally make memes to keep the internet fun.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:gap-8 2xl:gap-10 mt-8 lg:mt-12 2xl:mt-16">
              <div className="p-4 lg:p-8 2xl:p-10 bg-white/5 rounded-2xl 2xl:rounded-3xl border border-white/5">
                <h4 className="text-3xl lg:text-5xl 2xl:text-7xl font-bold text-white mb-1 lg:mb-2 2xl:mb-4">50+</h4>
                <div className="text-sm lg:text-lg 2xl:text-2xl text-gray-400">Products Launched</div>
              </div>
              <div className="p-4 lg:p-8 2xl:p-10 bg-white/5 rounded-2xl 2xl:rounded-3xl border border-white/5">
                <h4 className="text-3xl lg:text-5xl 2xl:text-7xl font-bold text-white mb-1 lg:mb-2 2xl:mb-4">10k+</h4>
                <div className="text-sm lg:text-lg 2xl:text-2xl text-gray-400">Active Users</div>
              </div>
            </div>
          </div>
          <div className="space-y-4 lg:space-y-6 2xl:space-y-8">
            {/* Career Timeline - Simplified */}
            {[
              { role: 'Senior Product Manager', company: 'TechCorp AI', year: '2023 - Present' },
              { role: 'Product Lead', company: 'StartUp Inc.', year: '2020 - 2023' },
              { role: 'Product Analyst', company: 'BigData Co.', year: '2018 - 2020' },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 lg:gap-6 2xl:gap-8 p-4 lg:p-8 2xl:p-10 rounded-xl lg:rounded-2xl 2xl:rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
              >
                <div className="w-12 h-12 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-base lg:text-2xl 2xl:text-3xl flex-shrink-0">
                  {job.year.substring(0, 2)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg lg:text-3xl 2xl:text-4xl text-white mb-1 lg:mb-2 2xl:mb-3">{job.role}</h4>
                  <p className="text-gray-400 text-sm lg:text-xl 2xl:text-2xl">{job.company} • {job.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Productivity Projects */}
      <Section id="productivity" title="AI for Productivity" icon={Sparkles}>
        <p className="text-center text-gray-400 max-w-4xl 2xl:max-w-5xl mx-auto mb-12 lg:mb-20 text-lg md:text-2xl 2xl:text-3xl">
          Tools designed to enhance human capability and streamline workflows using the latest in LLM technology.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 2xl:gap-12">
          {projects.productivity.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Meme Projects */}
      <Section id="fun" title="Just for Fun" icon={Smile}>
        <p className="text-center text-gray-400 max-w-4xl 2xl:max-w-5xl mx-auto mb-12 lg:mb-20 text-lg md:text-2xl 2xl:text-3xl">
          Because AI shouldn't always be serious. Here are some experiments that explore the lighter side of technology.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 2xl:gap-12">
          {projects.meme.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 lg:py-20 2xl:py-24 border-t border-white/10 bg-black">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-8 lg:mb-10 2xl:mb-12">Let's Build Something Amazing</h2>
          <div className="flex justify-center gap-6 lg:gap-8 2xl:gap-10 mb-8 lg:mb-12 2xl:mb-16">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" /></a>
          </div>
          <p className="text-gray-500 text-sm lg:text-lg 2xl:text-2xl">
            © {new Date().getFullYear()} Stoimen Iliev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
