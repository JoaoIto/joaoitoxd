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
      <img height="300" src="../../src/assets/devWeb.svg" alt="" />
    </header>
  );
};