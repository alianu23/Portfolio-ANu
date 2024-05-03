import React from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import Link from "next/link";
import { CssVarsProvider } from "@mui/joy/styles";
import { motion } from "framer-motion";

function Header() {
  const navigations = [
    { name: "Home", path: "/HomePage" },
    { name: "About me", path: "/Aboutpage" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contact" },
  ];

  const isActive = usePathname();

  return (
    <CssVarsProvider>
      <header className={styles.header}>
        <motion.div
          initial={{ x: -400, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
        >
          <Link href="./HomePage">
            <h1 className={styles.portfolio}>Portfolio</h1>{" "}
          </Link>{" "}
        </motion.div>

        <div className={styles.bigcontain}>
          <motion.div
            initial={{ x: 400, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
          >
            <div className={styles.inside}>
              {navigations.map((navigation, i) => (
                <Link
                  className={`transition-all duration-75 text-lg ${
                    isActive === navigation.path
                      ? "font-semibold"
                      : "hover:font-semibold "
                  }`}
                  key={i}
                  href={navigation.path}
                >
                  {navigation.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </header>
    </CssVarsProvider>
  );
}

export default Header;
