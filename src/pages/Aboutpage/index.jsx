import React from "react";
import { Data } from "@/data";
import { Skills } from "../../components/Skills";
import { Button1 } from "@/components/Buttons";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col w-auto content-center items-center mb-7">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {Data.map((el) => (
            <Skills data={el} key={el.id} />
          ))}
        </div>
        <div className="flex content-around mt-12">
          <section className="flex flex-col w-3/">
            <h1 className="text-5xl">I'm Anudari Oyunbat</h1>
            <div className="flex flex-col w-78">
              <h4 className="flex-wrap mt-10 mr-10">
                I'm frontend developer, UX architect and Javascript engineer,
                Photochromic Lens enthusiast, practicing minimalist, and Pop
                music & Jazz lover in search of flow.
              </h4>
              <h4 className="flex-wrap mr-10">
                Working with my hands to make magic happen on the internet. View
                my Projects. Articles, Resumé, ContactMe ,or sendme an email at
                hellocodewonders@gmail.com
              </h4>
            </div>
            <div style={{ marginTop: 30 }}>
              <Button1 />
            </div>
          </section>
          <img
            className="rounded-3xl"
            src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.webp?b=1&s=170667a&w=0&k=20&c=XCzSqjgn02etddi527fy6Q9Dz_MtPYKKc-MMbhS3kK0="
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
