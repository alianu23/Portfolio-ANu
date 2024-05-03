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
      <header className="mt-[10px] my-[50px] border-b-[1px] border-[#eaecef] flex lg:justify-between items-center justify-center">
        <motion.div
          initial={{ x: -400, opacity: 0, scale: 0 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
        >
          <Link href="./HomePage">
            <h1 className="text-2xl text-center w-full">Portfolio</h1>{" "}
          </Link>{" "}
        </motion.div>

        <div className={styles.bigcontain}>
          <motion.div
            initial={{ x: 400, opacity: 0, scale: 0 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
          >
            <div className="flex justify-between ">
              {navigations.map((navigation, i) => (
                <Link
                  className={`transition-all duration-75 lg:text-lg text-[0px] ${
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
