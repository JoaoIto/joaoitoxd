import React from 'react';
import { Card } from './index';
import { links } from './index.css';

export const LinkList: React.FC = () => {
  return (
    <>
      <div className={links}>
          <Card url="https://www.linkedin.com/in/jo%C3%A3o-victor-p%C3%B3voa-fran%C3%A7a-97502420b/" color="#0e76a8">
            Linkedin
          </Card>

          <Card url="https://github.com/JoaoIto" color="#171515">
            GitHub
          </Card>

          <Card url="https://www.instagram.com/joaoitoxd/" color="#87536a">
            Instagram
          </Card>

          <Card url="mailto:joaovictorpfr@gmail.com?subject=Assunto" color="#cacaca">
            Email
          </Card>
      </div>
    </>
  );
};
