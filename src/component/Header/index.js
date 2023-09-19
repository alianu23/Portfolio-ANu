import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import { motion } from "framer-motion";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      style={{ fontSize: 20, padding: 8 }}
      variant="soft"
      color="neutral"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function Header() {
  return (
    <CssVarsProvider>
      <header className={styles.header}>
        <motion.div
          initial={{ x: -400, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
        >
          <Link href="./HomePage">
            <h1 className={styles.portfolio}>Portfolio</h1>{" "}
            <p style={{ width: 60, height: 2, backgroundColor: "black" }}> </p>
          </Link>{" "}
          <ModeToggle />
        </motion.div>
        <div className={styles.bigcontain}>
          <motion.div
            initial={{ x: 400, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
          >
            <div className={styles.inside}>
              <Link className={styles.headerP} href="./HomePage">
                Home
              </Link>
              <Link className={styles.headerP} href="./Aboutpage">
                About
              </Link>
              <Link className={styles.headerP} href="./Projects">
                Projects
              </Link>
              <Link className={styles.hbutton} href="./Contact">
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </header>
    </CssVarsProvider>
  );
}

export default Header;
