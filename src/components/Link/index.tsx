import React from 'react';

type LinkProps = {
  url: string;
  title: string;
}

const Link: React.FC<LinkProps> = ({ url, title }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  );
};

export default Link;
