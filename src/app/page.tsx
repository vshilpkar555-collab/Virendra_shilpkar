import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";

export default function Home() {
  const resumeUrl = "https://drive.google.com/file/d/1vEA2LJPKAH8814izm2ceCVEX8kNscwy7/view?usp=sharing";

  return (
    <>
      <Hero />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Process />
      <WhyWorkWithMe />

      {/* Resume CTA Section */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl opacity-90 mb-10 text-balance">
            Looking for an experienced Flutter developer to build, improve or scale a mobile application? Let's connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/virendra-shilpkar-b389a620b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-primary transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
