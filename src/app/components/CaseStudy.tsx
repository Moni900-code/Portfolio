import { ArrowLeft, Target, Users, Lightbulb, Palette, TestTube, TrendingUp, CheckCircle2, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyProps {
  onBack: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    tools: string[];
  };
}

export function CaseStudy({ onBack, project }: CaseStudyProps) {
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#00FFB2]/10 via-[#7CFFCB]/5 to-transparent rounded-full blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-[900px] mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#052217] border border-[#0A3D2A] rounded-full text-sm text-[#00FFB2] mb-6 font-medium tracking-wide">
              {project.category}
            </span>
            <h1 className="text-6xl font-bold text-[#E8FFF4] mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-[#B9FFD9] leading-relaxed">
              Redesigning the mobile experience to increase user engagement and streamline key workflows through research-driven design decisions.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden border border-[#0A3D2A] shadow-2xl max-w-[1200px] mx-auto">
            <div className="aspect-video bg-gradient-to-br from-[#052217] to-[#061512]">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 max-w-[1200px] mx-auto">
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl">
              <h3 className="text-sm font-semibold text-[#7CFFCB]/70 uppercase tracking-wider mb-2">Timeline</h3>
              <p className="text-lg font-medium text-[#E8FFF4]">4 Months</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl">
              <h3 className="text-sm font-semibold text-[#7CFFCB]/70 uppercase tracking-wider mb-2">Role</h3>
              <p className="text-lg font-medium text-[#E8FFF4]">Lead UI/UX Designer</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl">
              <h3 className="text-sm font-semibold text-[#7CFFCB]/70 uppercase tracking-wider mb-2">Team</h3>
              <p className="text-lg font-medium text-[#E8FFF4]">2 Designers, 3 Developers</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl">
              <h3 className="text-sm font-semibold text-[#7CFFCB]/70 uppercase tracking-wider mb-2">Platform</h3>
              <p className="text-lg font-medium text-[#E8FFF4]">iOS & Android</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FFB2]/20 to-[#7CFFCB]/10 border border-[#00FFB2]/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#00FFB2]" />
              </div>
              <h2 className="text-4xl font-bold text-[#E8FFF4]">The Challenge</h2>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
              <p className="text-lg text-[#B9FFD9] leading-relaxed mb-6">
                Users were experiencing high drop-off rates during the onboarding process, with 60% abandoning the app before completing their profile setup. The existing interface was cluttered, lacked clear visual hierarchy, and failed to communicate value propositions effectively.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                  <div className="text-3xl font-bold text-[#00FFB2] mb-2">60%</div>
                  <p className="text-sm text-[#7CFFCB]/70">Drop-off Rate</p>
                </div>
                <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                  <div className="text-3xl font-bold text-[#7CFFCB] mb-2">2.5★</div>
                  <p className="text-sm text-[#7CFFCB]/70">App Store Rating</p>
                </div>
                <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                  <div className="text-3xl font-bold text-[#00FF9D] mb-2">45s</div>
                  <p className="text-sm text-[#7CFFCB]/70">Avg. Session Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-20 relative bg-[#052217]/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7CFFCB]/20 to-[#00FF9D]/10 border border-[#7CFFCB]/30 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#7CFFCB]" />
              </div>
              <h2 className="text-4xl font-bold text-[#E8FFF4]">Research & Discovery</h2>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">User Research Methods</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-3">Qualitative</h4>
                    <ul className="space-y-2 text-[#B9FFD9]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00FFB2] mt-0.5 shrink-0" />
                        <span>15 in-depth user interviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00FFB2] mt-0.5 shrink-0" />
                        <span>3 focus group sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#00FFB2] mt-0.5 shrink-0" />
                        <span>Competitive analysis of 5 apps</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#7CFFCB] uppercase tracking-wider mb-3">Quantitative</h4>
                    <ul className="space-y-2 text-[#B9FFD9]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#7CFFCB] mt-0.5 shrink-0" />
                        <span>Survey with 250+ responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#7CFFCB] mt-0.5 shrink-0" />
                        <span>Analytics data analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#7CFFCB] mt-0.5 shrink-0" />
                        <span>Heatmap & session recordings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-6">Key Findings</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                    <p className="text-[#B9FFD9]"><span className="text-[#00FFB2] font-semibold">78%</span> of users found the onboarding process confusing and too lengthy</p>
                  </div>
                  <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                    <p className="text-[#B9FFD9]"><span className="text-[#7CFFCB] font-semibold">65%</span> struggled to find key features within the app navigation</p>
                  </div>
                  <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                    <p className="text-[#B9FFD9]"><span className="text-[#00FF9D] font-semibold">82%</span> wanted a more personalized experience based on their preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FF9D]/20 to-[#00FFB2]/10 border border-[#00FF9D]/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#00FF9D]" />
              </div>
              <h2 className="text-4xl font-bold text-[#E8FFF4]">User Personas</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Persona 1 */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl hover:border-[#00FFB2]/30 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FFB2] to-[#7CFFCB] flex items-center justify-center text-[#061512] font-bold text-2xl">
                    S
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#E8FFF4] mb-1">Sarah Chen</h3>
                    <p className="text-[#7CFFCB]/70">Busy Professional, Age 32</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-2">Goals</h4>
                    <p className="text-[#B9FFD9]">Quick and efficient task completion with minimal friction</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-[#B9FFD9]">Limited time, needs intuitive navigation, frustrated by complex interfaces</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-2">Tech Savviness</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i <= 4 ? 'bg-[#00FFB2]' : 'bg-[#0A3D2A]'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Persona 2 */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl hover:border-[#7CFFCB]/30 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7CFFCB] to-[#00FF9D] flex items-center justify-center text-[#061512] font-bold text-2xl">
                    M
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#E8FFF4] mb-1">Mike Rodriguez</h3>
                    <p className="text-[#7CFFCB]/70">Tech Enthusiast, Age 26</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[#7CFFCB] uppercase tracking-wider mb-2">Goals</h4>
                    <p className="text-[#B9FFD9]">Exploring advanced features and customization options</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#7CFFCB] uppercase tracking-wider mb-2">Pain Points</h4>
                    <p className="text-[#B9FFD9]">Lacks depth in features, wants more control and personalization</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#7CFFCB] uppercase tracking-wider mb-2">Tech Savviness</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`h-2 flex-1 rounded-full ${i <= 5 ? 'bg-[#7CFFCB]' : 'bg-[#0A3D2A]'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 relative bg-[#052217]/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FFB2]/20 to-[#7CFFCB]/10 border border-[#00FFB2]/30 flex items-center justify-center">
                <Palette className="w-6 h-6 text-[#00FFB2]" />
              </div>
              <h2 className="text-4xl font-bold text-[#E8FFF4]">Design Process</h2>
            </div>

            <div className="space-y-8">
              {/* Information Architecture */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">Information Architecture</h3>
                <p className="text-[#B9FFD9] mb-6">
                  Restructured the app navigation based on user mental models and task frequency analysis, reducing the number of steps to complete key actions by 40%.
                </p>
                <div className="aspect-video bg-[#061512] border border-[#0A3D2A] rounded-2xl flex items-center justify-center">
                  <span className="text-[#7CFFCB]/40">User Flow Diagram</span>
                </div>
              </div>

              {/* Wireframes */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">Low-Fidelity Wireframes</h3>
                <p className="text-[#B9FFD9] mb-6">
                  Created multiple iterations focusing on content hierarchy, user flow optimization, and accessibility considerations.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-[9/16] bg-[#061512] border border-[#0A3D2A] rounded-xl flex items-center justify-center">
                      <span className="text-[#7CFFCB]/40">Wireframe {i}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* High-Fidelity Designs */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">High-Fidelity Designs</h3>
                <p className="text-[#B9FFD9] mb-6">
                  Applied the design system with consistent components, ensuring scalability and maintaining visual coherence across all screens.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-[9/16] bg-gradient-to-br from-[#061512] to-[#052217] border border-[#00FFB2]/20 rounded-xl flex items-center justify-center">
                      <span className="text-[#00FFB2]/40">Screen {i}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design System */}
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">Design System Components</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-4">Color Palette</h4>
                    <div className="flex gap-2">
                      <div className="flex-1 h-16 rounded-xl bg-[#00FFB2]" />
                      <div className="flex-1 h-16 rounded-xl bg-[#7CFFCB]" />
                      <div className="flex-1 h-16 rounded-xl bg-[#00FF9D]" />
                      <div className="flex-1 h-16 rounded-xl bg-[#052217]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00FFB2] uppercase tracking-wider mb-4">Typography</h4>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-[#E8FFF4]">Inter Bold</div>
                      <div className="text-lg font-medium text-[#B9FFD9]">Inter Medium</div>
                      <div className="text-base text-[#7CFFCB]">Inter Regular</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Iteration */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7CFFCB]/20 to-[#00FF9D]/10 border border-[#7CFFCB]/30 flex items-center justify-center">
                <TestTube className="w-6 h-6 text-[#7CFFCB]" />
              </div>
              <h2 className="text-4xl font-bold text-[#E8FFF4]">Testing & Validation</h2>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">Usability Testing</h3>
                <p className="text-[#B9FFD9] mb-6">
                  Conducted 3 rounds of moderated usability testing with 20 participants per round, iterating based on feedback and behavioral observations.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl text-center">
                    <div className="text-3xl font-bold text-[#00FFB2] mb-2">20</div>
                    <p className="text-sm text-[#7CFFCB]/70">Participants per Round</p>
                  </div>
                  <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl text-center">
                    <div className="text-3xl font-bold text-[#7CFFCB] mb-2">3</div>
                    <p className="text-sm text-[#7CFFCB]/70">Testing Rounds</p>
                  </div>
                  <div className="p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl text-center">
                    <div className="text-3xl font-bold text-[#00FF9D] mb-2">45+</div>
                    <p className="text-sm text-[#7CFFCB]/70">Design Iterations</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-4">A/B Testing Results</h3>
                <p className="text-[#B9FFD9] mb-6">
                  Ran multivariate tests on key screens to optimize conversion rates and user engagement metrics.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                    <span className="text-[#B9FFD9]">Onboarding Completion</span>
                    <span className="text-[#00FFB2] font-semibold">+42% improvement</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                    <span className="text-[#B9FFD9]">Task Success Rate</span>
                    <span className="text-[#7CFFCB] font-semibold">+38% improvement</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#061512] border border-[#0A3D2A] rounded-xl">
                    <span className="text-[#B9FFD9]">User Satisfaction Score</span>
                    <span className="text-[#00FF9D] font-semibold">+55% improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-[#052217]/30">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FF9D]/20 to-[#00FFB2]/10 border border-[#00FF9D]/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#00FF9D]" />
              </div>
              <h2 className="text-4xl font-bold text-[#E8FFF4]">Results & Impact</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-gradient-to-br from-[#00FFB2]/10 to-[#052217] border border-[#00FFB2]/30 rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-6">Business Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <div className="text-5xl font-bold text-[#00FFB2]">85%</div>
                    <div className="text-[#B9FFD9]">
                      <div className="font-semibold">Increase in user retention</div>
                      <div className="text-sm text-[#7CFFCB]/70">After 30 days</div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-5xl font-bold text-[#7CFFCB]">2.1M</div>
                    <div className="text-[#B9FFD9]">
                      <div className="font-semibold">New active users</div>
                      <div className="text-sm text-[#7CFFCB]/70">In 6 months post-launch</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#7CFFCB]/10 to-[#052217] border border-[#7CFFCB]/30 rounded-3xl">
                <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-6">User Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-3">
                    <div className="text-5xl font-bold text-[#7CFFCB]">4.7★</div>
                    <div className="text-[#B9FFD9]">
                      <div className="font-semibold">App store rating</div>
                      <div className="text-sm text-[#7CFFCB]/70">Up from 2.5 stars</div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-5xl font-bold text-[#00FF9D]">3.5x</div>
                    <div className="text-[#B9FFD9]">
                      <div className="font-semibold">Avg. session duration</div>
                      <div className="text-sm text-[#7CFFCB]/70">From 45s to 2m 38s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="p-8 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-3xl">
              <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-6">Key Learnings</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00FFB2] mt-1 shrink-0" />
                  <p className="text-[#B9FFD9]">
                    <span className="font-semibold text-[#E8FFF4]">Research is invaluable:</span> Early user research prevented costly design pivots later in development and ensured we solved the right problems.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7CFFCB] mt-1 shrink-0" />
                  <p className="text-[#B9FFD9]">
                    <span className="font-semibold text-[#E8FFF4]">Iterate quickly:</span> Rapid prototyping and testing allowed us to validate assumptions and make data-driven decisions faster.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00FF9D] mt-1 shrink-0" />
                  <p className="text-[#B9FFD9]">
                    <span className="font-semibold text-[#E8FFF4]">Accessibility matters:</span> Designing for accessibility from the start not only improved usability for all users but also expanded our potential user base.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#00FFB2] mt-1 shrink-0" />
                  <p className="text-[#B9FFD9]">
                    <span className="font-semibold text-[#E8FFF4]">Collaboration is key:</span> Working closely with developers and stakeholders throughout the process ensured smooth implementation and alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <h3 className="text-2xl font-semibold text-[#E8FFF4] mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-br from-[#052217] to-[#061512] border border-[#0A3D2A] rounded-2xl text-[#00FFB2] font-medium hover:border-[#00FFB2]/50 hover:bg-[#00FFB2]/5 transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* View Prototype CTA */}
      <section className="py-20 relative">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="p-12 bg-gradient-to-br from-[#00FFB2]/10 via-[#052217] to-[#061512] border border-[#00FFB2]/30 rounded-3xl">
            <h3 className="text-3xl font-bold text-[#E8FFF4] mb-4">
              Want to see the interactive prototype?
            </h3>
            <p className="text-lg text-[#B9FFD9] mb-8">
              Experience the full design with interactive flows and animations.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00FFB2] to-[#7CFFCB] text-[#061512] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#00FFB2]/25 hover:scale-105 transition-all"
            >
              View Prototype
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 border-t border-[#0A3D2A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-between items-center">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#00FFB2] hover:text-[#7CFFCB] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </button>
            <button className="flex items-center gap-2 text-[#7CFFCB] hover:text-[#00FFB2] transition-colors">
              <span className="font-medium">Next Case Study</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
