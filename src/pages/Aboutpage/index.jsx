import React, { useState } from "react";
import { softSkills, hardSkills } from "@/data";
import { Skills } from "../../components/Skills";
import img from "@/data/zurag/pic2.jpg";
import { Button1 } from "@/components/Buttons";
import { color, motion } from "framer-motion";

function AboutPage() {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-auto content-center items-center mb-7">
        <div className="flex items-center mt-12 mx-16">
          <section className="flex flex-col w-3/">
            <h1 className="text-5xl">I'm Anudari Oyunbat</h1>
            <div className="flex flex-col w-78">
              <h4 className="flex-wrap mt-10 mr-10">
                I'm Full Stack developer, UI architect, Home Chef/hobby/,
                practicing minimalist, Accountant, and R&B music & street dance
                lover.
              </h4>
              <h4 className="flex-wrap mr-10">
                Working with my hands to make magic happen on the internet. View
                my Projects, Resume, ContactMe ,or sendme an email at
                anybat23@gmail.com
              </h4>
            </div>
            <div style={{ marginTop: 30 }}>
              <Button1 />
            </div>
          </section>
          <img className="rounded-3xl w-[400px] h-[500px]" src={img.src} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-10">
          <button
            onClick={() => {
              setShow(true);
            }}
            className={`text-lg border-r-indigo-200  border-r-1 border-solid ${
              show === true
                ? "text-blue-500 border-b-[1px] border-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            My Soft skills
          </button>
          <button
            onClick={() => {
              setShow(false);
            }}
            className={`text-lg border-r-indigo-200  border-r-1 border-solid ${
              show === false
                ? "text-blue-500 border-b-[1px] border-blue-500"
                : "hover:text-blue-500"
            }`}
          >
            My Hard Skills
          </button>
        </div>
        {show === true ? (
          <div
            id="1"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {softSkills.map((el, i) => (
              <Skills data={el} key={i} />
            ))}
          </div>
        ) : (
          <div
            id="1"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {hardSkills.map((el, i) => (
              <Skills data={el} key={i} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default AboutPage;
