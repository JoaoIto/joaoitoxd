import React from "react";
import {links, linkNo} from "./index.css"

type ButtonLinkProps = {
  url: string;
  color?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<ButtonLinkProps> = ({ url, color = "blue", children }) => {
  return (
    <a href={url} className={linkNo}>
      <div className={links} style={{ 
        backgroundColor: color}}>
      {children}
      </div>
    </a>
  );
};