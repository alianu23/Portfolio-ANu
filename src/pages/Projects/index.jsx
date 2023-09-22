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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <h1 style={{ fontSize: 48 }}>PROJECT</h1>
          <div style={{ width: 40, height: 3, backgroundColor: "black" }}></div>
        </div>
        <div style={{ display: "flex", margin: "0 45px" }}>
          {Projectd.map((el) => (
            <ProjectData data={el} key={el.id} />
          ))}
        </div>
      </motion.div>
    </>
  );
}
