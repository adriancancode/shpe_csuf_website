import Image from "next/image";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>
          SHPE @ CSUF aims to empower the Hispanic community in
          engineering fields through providing career
          workshops, fun socials, and activities!
        </p>
        <p>
          Join us today for a chance to embark on some
          life-changing experiences!
        </p>
      </main>
    </div>
  );
}
