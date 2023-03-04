import React from "react";

type ButtonLinkProps = {
  url: string;
  color?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<ButtonLinkProps> = ({ url, color = "blue", children }) => {
  return (
    <a href={url}>
      <div style={{ 
        backgroundColor: color, 
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        width: "80%", 
        padding: "10px 20px",
        margin: "25px 10px", 
        border: '1px solid #fafafa',
        borderRadius: 10,
        color: "#fff", 
        textDecoration: "none",
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.5rem' }}>
      {children}
      </div>
    </a>
  );
};
