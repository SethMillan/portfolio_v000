import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode /* aqui basicamente es para poder traer imagenes, texto y todo*/;
  color: string
  letra: string;
};

export const BtnFilled = ({ children, color, letra}: ButtonProps) => {
  const backgroundColor = `var(${color})`;
const fontSize = letra;
  // ? Use una variable independiente pasandola por style para evitar problemas con tailwind
  const base = `flex items-center font-bold py-2 px-7 rounded-lg transition duration-200 text-white text-center font-[Roboto_Condensed] hover:scale-110 hover:shadow-lg cursor-pointer `;
  return (
    <button style={{ backgroundColor: backgroundColor,  fontSize: fontSize}} className={base}>
      {children}
    </button>
  );
};
