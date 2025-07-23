import Image from "next/image";
import FAQAccordion from "../components/faq-accordion";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-center mt-8 mb-8  min-h-svh">
      <div className='flex flex-col items-start gap-7'>
        <h1 className="text-6xl font-bold text-left">Welcome to SHPE at Cal State Fullerton!</h1>
        <p className="text-3xl font-black">Leading Hispanics In STEM!</p>
      </div>
      
      <section className="flex flex-row justify-evenly items-center gap-10">
        <div className="flex flex-col gap-11 max-w-1/3">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="text-justify">
            SHPE serves as the central hub for Hispanics in engineering and STEM fields to hone their skills 
            and realize their potential.  We offer a variety of professional development opportunities,
            including resume workshops, mock interviews, and networking events with industry professionals.
          </p>
        </div>
        <div>
          <Image
            src="/images/shpe-board.jpeg"
            alt="2025-2026 SHPE Board standing together beside a wall with the SHPE logo"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>
      <section className="flex flex-row gap-10 items-center justify-evenly">
        <div>
          <Image
            src="/images/shpetinas-logo.png"
            alt="SHPEtinas Logo with a pink and purple gradient"
            width={800}
            height={600}
            priority
          />
        </div>
        <div className="flex flex-col gap-11 w-1/3 max-w-1/3">
          <h2 className="text-5xl font-bold">SHPEtinas</h2>
          <p className="text-justify">
            Our sister chapter acts as a support group for Latinas in STEM and for our SHPE members, providing 
            a safe space to share experiences, network, and grow together.
          </p>
          <p className="text-justify">
            Join now for an opportunity 
            to connect with other Latinas in STEM, attend workshops, and participate in events that empower and uplift our community.
          </p>
          <button className="text-2xl">Join SHPEtinas</button>
        </div>
      </section>
      <section className="flex flex-row justify-evenly items-center gap-10">
        <div className="flex flex-col gap-11 max-w-1/3">
          <h2 className="text-5xl font-bold">Come join Us</h2>
          <p className="text-justify">
            Join SHPE at CSUF for a chance to grow in your journey through STEM and make unforgettable memories.
            Any CSUF student is welcome to join, regardless of major, gender, or ethnic background.
          </p>
          <button>Join Us</button>
        </div>
        <div>
          <Image
            src="/images/shpe-board.jpeg"
            alt="2025-2026 SHPE Board standing together beside a wall with the SHPE logo"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <FAQAccordion/>
      </section>
    </main>
  );
}
