import Image from "next/image";
// import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh pt-">
      <main className="flex flex-col gap-10 pl-">
        
        <h1 className="text-5xl font-bold text-center">Welcome to SHPE @ CSUF!</h1>
        <p className="text-2xl">
          SHPE @ CSUF aims to empower the Hispanic community in
          engineering fields through providing career
          workshops, fun socials, and activities!
        </p>
        <p className="text-2xl">
          Join us today for a chance to embark on some
          life-changing experiences!
        </p>
      </main>
    </div>
  );
}
