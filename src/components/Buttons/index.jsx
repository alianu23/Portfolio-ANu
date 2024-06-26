import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";

function Buttons({ label }) {
  return (
    <div>
      <Link href="./Aboutpage">
        <Button
          className="px-4 py-2.5 bg-slate-500 hover:bg-slate-400"
          variant="contained"
        >
          {label}
        </Button>
      </Link>
    </div>
  );
}

export const Button1 = () => {
  return (
    <Link href="./Projects">
      <Button
        className=" px-4 py-2.5 bg-slate-500 hover:bg-slate-400"
        variant="contained  text-white"
      >
        Check Projects
      </Button>
    </Link>
  );
};

export default Buttons;
