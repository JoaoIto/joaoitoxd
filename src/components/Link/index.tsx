import React from 'react';

type LinkProps = {
  url: string;
  title: string;
}

export const Card: React.FC<LinkProps> = ({ url, title }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
};