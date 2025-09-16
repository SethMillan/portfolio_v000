import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode /* aqui basicamente es para poder traer imagenes, texto y todo*/;
  color: string;
  letra: string;
};

export const BtnOutlined = ({ children, color, letra }: ButtonProps) => {
  const textColor = `var(${color})`;
  const fontSize = letra;
    // ? Use una variable independiente pasandola por style para evitar problemas con tailwind
    const base = `bg-transparent border-2 text-center font-[Roboto_Condensed] font-bold py-2 px-4 rounded transition duration-200 `;

  return <button style={{color:textColor, borderColor: textColor, fontSize: fontSize}} className={base}>{children}</button>;
};
