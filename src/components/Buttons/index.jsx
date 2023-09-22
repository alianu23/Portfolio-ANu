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
        style={{ backgroundColor: "#027ce7", padding: "10px 15px" }}
        variant="contained"
      >
        Check Projects
      </Button>
    </Link>
  );
};

export default Buttons;
