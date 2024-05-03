import React from "react";
import styles from "./style.module.css";
import Button from "@/components/Buttons";
import Footer from "@/components/Footer";
import img from "@/data/zurag/pic1.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import AboutPage from "../Aboutpage";
import Project from "../Projects";
import Contact from "../Contact";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className="mt-0 mx-12 flex flex-col gap-48">
        <div className={styles.contain}>
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <section className={styles.Intro}>
              <h3 className="text-3xl  text-slate-500 ">Hello</h3>
              <h1 className={styles.myName}>My name is Anudari Oyunbat</h1>

              <div className="flex">
                <h4 className={styles.about}>I'm </h4>
                <h4 className={styles.maj}>
                  <Typewriter
                    words={[
                      "an Innovator",
                      "a Backend developer",
                      "a Frontend developer",
                      "a Full stack developer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h4>
              </div>
              <Footer />
              <Button label={"See more about me"} />
              <a
                className="px-4 py-2.5 bg-slate-500 hover:bg-slate-400 text-white my-3 rounded-md"
                href="/files/Anudari_cv.pdf"
                download="Anudari_cv.pdf"
              >
                {" "}
                Download My CV{" "}
              </a>
            </section>
          </motion.div>
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img className={styles.img} src={img.src} alt="" />
          </motion.div>
        </div>
        <div>
          <AboutPage />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
