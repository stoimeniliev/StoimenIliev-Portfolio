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
  <section id={id} className="py-24 px-4">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-6 mb-16"
      >
        {Icon && <Icon className="w-16 h-16 text-indigo-400" />}
        <h2 className="text-8xl font-bold text-center mb-0">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -15 }}
    className="card group"
  >
    <div className="relative h-[30rem] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <a href={project.link} className="flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-2xl hover:bg-gray-200 transition-colors">
          View Project <ExternalLink size={28} />
        </a>
      </div>
    </div>
    <div className="p-12">
      <h3 className="text-5xl font-bold mb-6">{project.title}</h3>
      <p className="text-gray-400 mb-8 text-3xl">{project.description}</p>
      <div className="flex flex-wrap gap-4">
        {project.tags.map(tag => (
          <span key={tag} className="px-6 py-3 bg-white/5 rounded-full text-lg text-gray-300 border border-white/10 font-medium">
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
        <div className="container flex items-center justify-between h-32">
          <span className="font-bold text-4xl tracking-tight">Stoimen<span className="text-indigo-500">Iliev</span></span>
          <div className="flex gap-12 text-2xl font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#productivity" className="hover:text-white transition-colors">Work</a>
            <a href="#fun" className="hover:text-white transition-colors">Fun</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-[40rem] h-[40rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-[40rem] h-[40rem] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-indigo-400 font-medium mb-8 tracking-wide uppercase text-2xl">Product Manager & AI Enthusiast</h2>
            <h1 className="text-8xl md:text-[11rem] font-bold mb-10 leading-tight">
              Building the <br />
              <span className="gradient-text">Future</span>
            </h1>
            <p className="text-gray-400 text-3xl mb-14 max-w-3xl leading-relaxed">
              Hi, I'm Stoimen. I bridge the gap between human needs and artificial intelligence, creating products that are intuitive, powerful, and slightly magical.
            </p>
            <div className="flex gap-8">
              <a href="#productivity" className="bg-white text-black px-14 py-6 rounded-full font-bold text-2xl hover:bg-gray-200 transition-colors flex items-center gap-4">
                See My Work <ArrowRight size={32} />
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-6 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"><Github size={36} /></a>
                <a href="#" className="p-6 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"><Linkedin size={36} /></a>
                <a href="#" className="p-6 bg-white/5 rounded-full hover:bg-white/10 transition-colors border border-white/10"><Mail size={36} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative z-10 max-w-2xl mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&auto=format&fit=crop&q=80"
                alt="Stoimen Iliev"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <p className="font-bold text-5xl mb-2">Stoimen Iliev</p>
                <p className="text-gray-300 text-3xl">Product Visionary</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-indigo-500/30 rounded-3xl z-0 max-w-2xl mx-auto hidden md:block"></div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="About Me" icon={Cpu}>
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 text-gray-300 text-3xl">
            <p>
              With over 8 years of experience in product management, I specialize in translating complex technical capabilities into seamless user experiences.
            </p>
            <p>
              Currently, I am obsessed with **Generative AI** and how it can redefine productivity. I don't just manage products; I build prototypes, experiment with new models, and occasionally make memes to keep the internet fun.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-16">
              <div className="p-10 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-7xl font-bold text-white mb-4">50+</h4>
                <div className="text-2xl text-gray-400">Products Launched</div>
              </div>
              <div className="p-10 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-7xl font-bold text-white mb-4">10k+</h4>
                <div className="text-2xl text-gray-400">Active Users</div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
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
                className="flex items-center gap-8 p-10 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
              >
                <div className="w-24 h-24 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-3xl flex-shrink-0">
                  {job.year.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold text-4xl text-white mb-3">{job.role}</h4>
                  <p className="text-gray-400 text-2xl">{job.company} • {job.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Productivity Projects */}
      <Section id="productivity" title="AI for Productivity" icon={Sparkles}>
        <p className="text-center text-gray-400 max-w-5xl mx-auto mb-20 text-3xl">
          Tools designed to enhance human capability and streamline workflows using the latest in LLM technology.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.productivity.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Meme Projects */}
      <Section id="fun" title="Just for Fun" icon={Smile}>
        <p className="text-center text-gray-400 max-w-5xl mx-auto mb-20 text-3xl">
          Because AI shouldn't always be serious. Here are some experiments that explore the lighter side of technology.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.meme.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/10 bg-black">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-12">Let's Build Something Amazing</h2>
          <div className="flex justify-center gap-10 mb-16">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={40} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={40} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={40} /></a>
          </div>
          <p className="text-gray-500 text-2xl">
            © {new Date().getFullYear()} Stoimen Iliev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
