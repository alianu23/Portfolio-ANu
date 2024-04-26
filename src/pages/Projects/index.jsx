import React from "react";
import { Projectd } from "@/data";
import { ProjectData } from "../../components/ProjectData";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
};
export default function Project() {
  return (
    <>
      <motion.div transition={spring} animate={{ scale: 1.2 }}>
        <div className="flex flex-col container mx-auto items-center justify-center my-32">
          <div className=" flex flex-col items-center justify-center gap-2">
            <h2 className="text-2xl ">MY PROJECTS</h2>
            <div className="w-28 h-[1px] bg-black"></div>
          </div>
          <div className="grid grid-cols-3 gap-10 mx-16">
            {Projectd.map((el, i) => (
              <ProjectData data={el} key={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
