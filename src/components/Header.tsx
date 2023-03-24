import React, { useRef, useEffect } from "react";
import { styles } from "./index.css"; // Importando o objeto de classes CSS
import Typed, { TypedOptions } from "typed.js";

interface HeaderProps {
  title: string;
}

export function Header(props: HeaderProps) {
  const { title } = props;
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const words = title.split(" ");
      const options: TypedOptions = {
        strings: words,
        typeSpeed: 70,
        backSpeed: 120,
        backDelay: 1000,
        loop: true,
        stringsElement: undefined,
      };
      const typed = new Typed(titleRef.current.lastChild as Element, options);
      return () => {
        typed.destroy();
      };
    }
  }, [title]);

  return (
    <header className={styles.header}> {/* Usando a classe gerada dinamicamente */}
      <h3 className={styles.subtitle}>Front-End</h3>
      <h1 ref={titleRef} className={styles.title}>
        {title.split(" ").map((word, index) => (
          <span key={index}>
            {word}
            {index < title.split(" ").length - 1 ? " " : ""}
          </span>
        ))}
      </h1>
      <img
        height="200"
        src="https://raw.githubusercontent.com/JoaoIto/joaoitoxd/22997d66364e9a913c1798a349efe6d22e2f8137/src/assets/correctWebsite.svg"
        alt=""
      />
    </header>
  );
}
