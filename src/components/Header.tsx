import React, { useRef, useEffect } from 'react';
import { header, title, subtitle } from './index.css';
import Typed from 'typed.js';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const options = {
      strings: [title],
      typeSpeed: 100,
      backSpeed: 50,
    };

    if (titleRef.current) {
      new Typed(titleRef.current, options);
    }
  }, [title]);

  return (
    <header className={header}>
      <h3 className={subtitle}>Front-End</h3>
      <h1 className={title} ref={titleRef}></h1>
      <img height="200" src="https://raw.githubusercontent.com/JoaoIto/joaoitoxd/00953735853a57bf59adc7db1bace7d94fc0067c/src/assets/devWeb.svg" alt="" />
    </header>
  );
};