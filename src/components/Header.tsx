import React, { useRef, useEffect } from "react";
import { styles } from "./index.css";
import Typed from "typed.js";

interface HeaderProps {
  title: string;
}

interface MyTypedOptions{
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
}

export function Header(props: HeaderProps) {
  const { title } = props;
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const options: MyTypedOptions = {
        strings: [title],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
      };
      const typed = new Typed(titleRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, [title]);

  return (
    <header className={styles.header}>
      <h3 className={styles.subtitle}>Front-End</h3>
      <h1 ref={titleRef} className={styles.title}></h1>
      <img
        height="200"
        src="../../src/assets/correctWebsite.svg"
        alt=""
      />
    </header>
  );
}
