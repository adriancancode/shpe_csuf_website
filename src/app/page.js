import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-8 mb-8 min-h-svh">
      <div className='flex flex-col items-start gap-7'>
        <h1 className="text-6xl font-bold text-left">Welcome to SHPE at CSUF!</h1>
        <p className="text-3xl font-black">Leading Hispanics In STEM!</p>
      </div>
      
      <section className="flex flex-row justify-evenly gap-10">
        <div className="flex flex-col gap-11 max-w-1/2">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="text-justify">SHPE at CSUF serves to empower and provide the appropriate resources for Hispanic students pursuing a career in engineering fields.</p>
          <button>Join Us!</button>
        </div>
        <div>
          <Image
            src="/public/shpe-board.jpeg"
            alt="2025-2026 SHPE Board standing together beside a wall with the SHPE logo"
            width={800}
            height={600}
          />
        </div>
      </section>
      <section className="flex flex-row gap-11 mt-16">
        <div>
          <Image
            src="/public/shpetinas-logo.png"
            alt="SHPEtinas Logo with a pink and purple gradient"
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-11">
          <h2 className="text-5xl font-bold">SHPEtinas</h2>
          <p className="text-justify">Our sister chapter acts as a support group for our SHPE members, aiming to uplift spirits through mindfulness and career-preparedness workshops and activities.</p>
        </div>
      </section>
    </main>
  );
}
