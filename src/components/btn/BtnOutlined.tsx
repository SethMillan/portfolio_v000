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
    const base = `border-[var(${color})] text-[var(${color})]  bg-transparent border-2 text-center font-[Roboto_Condensed] font-bold py-2 px-6 transition duration-200 hover:bg-[var(${color})] hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer hover:scale-110 hover:shadow-lg`;

  return <button style={{ fontSize: fontSize, borderRadius: '18px'}} className={base}>{children}</button>;
};
