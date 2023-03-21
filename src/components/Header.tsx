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
        src="https://raw.githubusercontent.com/JoaoIto/joaoitoxd/22997d66364e9a913c1798a349efe6d22e2f8137/src/assets/correctWebsite.svg"
        alt=""
      />
    </header>
  );
}
