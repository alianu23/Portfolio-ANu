import React from "react";
import styles from "./style.module.css";
import Button from "@/component/Buttons";
import Footer from "@/component/Footer";
import img from "@/data/zurag.png";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import AboutPage from "../Aboutpage";
import Project from "../Projects";
import Contact from "../Contact";

function Home() {
  return (
    <>
      <div style={{ margin: "0 50px" }}>
        <div className={styles.contain}>
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <section className={styles.Intro}>
              <h3 style={{ fontSize: 32, color: "silver" }}>Hello</h3>
              <h1 className={styles.myName}>My name is Anudari Oyunbat</h1>
              <div className={styles.rrr}>
                <div style={{ display: "flex" }}>
                  <h4 className={styles.about}>I'm </h4>
                  <h4 className={styles.maj}>
                    <Typewriter
                      words={[
                        "a UI/UX Designer",
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
                <Button />
              </div>
            </section>
          </motion.div>
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img style={{ width: 700, height: 500 }} src={img.src} alt="" />
          </motion.div>
        </div>
        <AboutPage />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default Home;
