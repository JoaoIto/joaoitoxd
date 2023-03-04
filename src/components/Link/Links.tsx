import React from "react";
import { Card } from "./index";

const iconUrls = {
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  gmail:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-plain.svg",
  instagram:
    "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  linkedin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
};

export const LinkList: React.FC = () => {
  return (
    <>
      <div>
        <Card
          url="https://www.linkedin.com/in/jo%C3%A3o-victor-p%C3%B3voa-fran%C3%A7a-97502420b/"
          color="#0e76a8"
        >
          <img height="40" src={iconUrls.linkedin} alt="Icon de linkedin" />
          Linkedin
        </Card>

        <Card url="https://github.com/JoaoIto" color="#818181">
          <img height="40" src={iconUrls.github} alt="Icon do GitHub" />
          GitHub
        </Card>

        <Card url="https://www.instagram.com/joaoitoxd/" color="#87536a">
          <img height="40" src={iconUrls.instagram} alt="Icone do instagram" />
          Instagram
        </Card>

        <Card
          url="mailto:joaovictorpfr@gmail.com?subject=Assunto"
          color="#002f55"
        >
          <img height="40" src={iconUrls.gmail} alt="Icon de email" />
          Email
        </Card>
      </div>
    </>
  );
};
