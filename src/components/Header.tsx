import React, { useRef, useEffect } from 'react';
import { styles } from './index.css';
import Typed from 'typed.js';

interface HeaderProps {
  title: string;
}

interface MyTypedOptions extends Typed.TypedOptions {
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
      <h1 ref={titleRef} className={styles.title} ></h1>
      <img height="200" src="https://raw.githubusercontent.com/JoaoIto/joaoitoxd/00953735853a57bf59adc7db1bace7d94fc0067c/src/assets/devWeb.svg" alt="" />
    </header>
  );
};