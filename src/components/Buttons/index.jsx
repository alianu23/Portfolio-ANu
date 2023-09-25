import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";

function Buttons() {
  return (
    <div className={styles.buttonai}>
      <Link href="./Aboutpage">
        <Button className={styles.buttonI} variant="contained">
          See more About me
        </Button>
      </Link>
    </div>
  );
}

export const Button1 = () => {
  return (
    <Link href="./Projects">
      <Button
        className=" px-4 py-2.5 "
        variant="contained bg-blue-500 text-white"
      >
        Check Projects
      </Button>
    </Link>
  );
};

export default Buttons;
