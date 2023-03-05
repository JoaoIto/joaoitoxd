# Link

- **O componente de link é usado como argumento uma tipagem dos atributos e valores que serão passados dentro dos parâmetros do componente de Card de link, que assim pode ser utilizado dentro do componente principal pelos seus atributos HTML React. Como o próprio React faz...**

```tsx
import React from "react";
import {links, linkNo} from "./index.css"

// Tipagem de atributos
type ButtonLinkProps = {
  url: string;
  color?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<ButtonLinkProps> = ({ url, color = "blue", children }) => {
  return (
    <a href={url} className={linkNo}>
      <div className={links} style={{ 
        backgroundColor: color}}> <!-- Você escolher a cor do seu link!-->
      {children}
      </div>
    </a>
  );
};
```

E claro utilizando a esilização do componente de link a partir do vanilla extract, estilização comum...

```tsx
display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "80%",
  padding: "20px",
  margin: "25px 10px",
  border: "1px solid #fafafa",
  borderRadius: 10,
  color: "#fff",
  fontFamily: "Inter, sans-serif",
  fontSize: "1.5rem",
```

---

**Logo, assim podemos personalizar através dos atributos dentro do componente principal através desses argumentos, e assim podemos fazer qualquer link!** 

**Como exemplificação...**

```tsx
        <Card
          url="https://www.linkedin.com/in/jo%C3%A3o-victor-p%C3%B3voa-fran%C3%A7a-97502420b/"
          color="#0e76a8" // Mudando a url tanto a cor do link para os atributos...
        >
          <img height="40" src={iconUrls.linkedin} 
          /* Através do próprio objeto criado dos links */ alt="Icon de linkedin" />
          Linkedin
        </Card>
```