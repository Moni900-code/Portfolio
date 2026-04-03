import { ArrowLeft, ArrowRight, Target, Users, TrendingUp, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  category: string;
  image: string;
  tools: string[];
  behanceUrl?: string;
}

interface CaseStudiesLandingProps {
  onBack: () => void;
  projects: Project[];
  onSelectCaseStudy: (index: number) => void;
}

export function CaseStudiesLanding({ onBack, projects, onSelectCaseStudy }: CaseStudiesLandingProps) {
  return (
    <div className="fixed inset-0 z-50 bg-[#061512] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#061512]/95 backdrop-blur-xl border-b border-[#0A3D2A]">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#00FFB2] hover:text-[#7CFFCB] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#00FFB2]/10 via-[#7CFFCB]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-[900px] mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#052217] border border-[#0A3D2A] rounded-full text-sm text-[#00FFB2] mb-6 font-medium tracking-wide">
              PORTFOLIO
            </span>
            <h1 className="text-6xl font-bold text-[#E8FFF4] mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-xl text-[#B9FFD9] leading-relaxed">
              A collection of my work showcasing research-driven design solutions across mobile applications, with focus on user experience and measurable business impact.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-[1200px] mx-auto mb-20">
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#00FFB2] mb-2">{projects.length}+</div>
              <p className="text-sm text-[#7CFFCB]/70">Projects Completed</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#7CFFCB] mb-2">4+</div>
              <p className="text-sm text-[#7CFFCB]/70">Years Experience</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#00FF9D] mb-2">50+</div>
              <p className="text-sm text-[#7CFFCB]/70">Happy Clients</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl text-center">
              <div className="text-4xl font-bold text-[#00FFB2] mb-2">85%</div>
              <p className="text-sm text-[#7CFFCB]/70">Avg. User Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FFB2]/20 to-[#7CFFCB]/10 border border-[#00FFB2]/30 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#00FFB2]" />
            </div>
            <h2 className="text-4xl font-bold text-[#E8FFF4]">Featured Projects</h2>
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => onSelectCaseStudy(index)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] hover:border-[#00FFB2]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FFB2]/10">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061512] via-[#061512]/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 px-6 py-3 bg-[#00FFB2] text-[#061512] rounded-xl font-semibold shadow-lg">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 bg-[#0A3D2A]/50 border border-[#00FFB2]/30 rounded-full text-xs text-[#00FFB2] mb-4 font-medium tracking-wide">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-bold text-[#E8FFF4] mb-3 group-hover:text-[#00FFB2] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[#B9FFD9] mb-4 leading-relaxed">
                      A comprehensive mobile application focusing on user experience, intuitive navigation, and modern design principles with measurable business impact.
                    </p>

                    {/* Key Metrics Preview */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="p-3 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                        <div className="text-lg font-bold text-[#00FFB2]">+42%</div>
                        <p className="text-xs text-[#7CFFCB]/70">Engagement</p>
                      </div>
                      <div className="p-3 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                        <div className="text-lg font-bold text-[#7CFFCB]">4.7★</div>
                        <p className="text-xs text-[#7CFFCB]/70">User Rating</p>
                      </div>
                      <div className="p-3 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                        <div className="text-lg font-bold text-[#00FF9D]">85%</div>
                        <p className="text-xs text-[#7CFFCB]/70">Retention</p>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#0A3D2A]/30 border border-[#00FFB2]/20 rounded-full text-xs text-[#B9FFD9]"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="px-3 py-1 text-xs text-[#7CFFCB]/70">
                          +{project.tools.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 relative bg-[#052217]/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7CFFCB]/20 to-[#00FF9D]/10 border border-[#7CFFCB]/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#7CFFCB]" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#E8FFF4] mb-6">
              My Design Approach
            </h2>
            <p className="text-lg text-[#B9FFD9] leading-relaxed">
              Every project follows a proven, user-centered design process that ensures measurable results and exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: 'Research',
                desc: 'User interviews, surveys, and competitive analysis',
                color: '#00FFB2'
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Define',
                desc: 'User personas, journey maps, and problem statements',
                color: '#7CFFCB'
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Design',
                desc: 'Wireframes, prototypes, and high-fidelity mockups',
                color: '#00FF9D'
              },
              {
                icon: <ExternalLink className="w-6 h-6" />,
                title: 'Test & Iterate',
                desc: 'Usability testing, A/B testing, and refinement',
                color: '#00FFB2'
              }
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl hover:border-[#00FFB2]/30 transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00FFB2]/20 to-[#7CFFCB]/10 border border-[#00FFB2]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ borderColor: `${step.color}40` }}
                >
                  <div style={{ color: step.color }}>
                    {step.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-2" style={{ color: step.color }}>
                  {i + 1}.
                </div>
                <h3 className="text-xl font-bold text-[#E8FFF4] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#B9FFD9] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00FFB2]/10 via-[#052217] to-[#061512] border border-[#00FFB2]/30 p-12 text-center">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00FFB2]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#7CFFCB]/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-[#E8FFF4] mb-4">
                Results That Matter
              </h2>
              <p className="text-xl text-[#B9FFD9] mb-8 max-w-[700px] mx-auto">
                Every case study demonstrates real, measurable impact on user satisfaction, engagement, and business metrics.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
                <div>
                  <div className="text-5xl font-bold text-[#00FFB2] mb-2">85%</div>
                  <p className="text-[#B9FFD9]">Average User Retention Increase</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#7CFFCB] mb-2">4.7★</div>
                  <p className="text-[#B9FFD9]">Average App Store Rating</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#00FF9D] mb-2">2M+</div>
                  <p className="text-[#B9FFD9]">Active Users Across Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-[#E8FFF4] mb-4">
            Interested in working together?
          </h3>
          <p className="text-lg text-[#B9FFD9] mb-8">
            Let's create something amazing that delivers real results.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBack();
              setTimeout(() => {
                const contactSection = document.querySelector('#contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FFB2] to-[#7CFFCB] text-[#061512] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#00FFB2]/25 hover:scale-105 transition-all"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 border-t border-[#0A3D2A]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#00FFB2] hover:text-[#7CFFCB] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </section>
    </div>
  );
}
