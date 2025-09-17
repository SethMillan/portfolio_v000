import { BtnFilled } from "../btn/BtnFilled";
import { BtnOutlined } from "../btn/BtnOutlined";
import { Nave } from "./Nave";
import { Stats } from "./Stats";

// AboutMe.tsx
export default function AboutMe() {
  return (
    <section className="w-full h-[120vh] mx-auto p-6 flex relative z-4">
      <div className="pl-30">
        <p className="text-[var(--color-secondary)] font-[Roboto_Condensed] text-[42px] italic font-semibold leading-normal">
          🚀 ABOUT ME
        </p>
        <p className="pt-1 text-[var(--color-text)] font-[Roboto_Condensed] text-[54px] not-italic font-extrabold leading-normal">
          BEST PROJECT LEAD
        </p>
        <p className="-mt-3 text-[var(--color-text)] font-[Roboto_Condensed] text-[54px] not-italic font-extrabold leading-normal">
          & DEVELOPER IN LATAM
        </p>

        <p className="pt-1 text-[var(--color-text)] text-justify font-[Open_Sans] text-[28px] not-italic font-normal leading-[42px]">
          My professional goal is to create solutions that drive growth <br />{" "}
          and digital transformation within organizations.
        </p>

        <Stats></Stats>
        <div className="pt-12 flex justify-between items-center max-w-lg flex-col gap-6 sm:flex-row">
          <BtnFilled color={"--color-primary"} letra={"28px"}>
            DOWNLOAD CV
            <img
              src="/icons/download.svg"
              alt="Download Icon"
              className="inline-block ml-2 w-9 h-9"
            />
          </BtnFilled>
          <BtnOutlined color={"--color-primary"} letra={"28px"}>
            CONTACT ME !
          </BtnOutlined>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center -mt-25 ">
        <Nave></Nave>
      </div>
      <div className="bg-[var(--background-secondary)] absolute -bottom-20 h-8 w-full z-4 left-0"></div>
      <svg
        className="absolute left-0 -bottom-22 z-3"
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="381"
        viewBox="0 0 1728 381"
        fill="none"
      >
        <path
          d="M1012.13 5.48145C1048.79 -4.7409 1077.59 3.19419 1102.58 21.0762C1127.61 38.9826 1148.82 66.8621 1170.24 96.5459C1191.63 126.204 1213.23 157.655 1238.99 182.57C1264.77 207.497 1294.76 225.92 1332.95 229.498C1377.21 233.643 1424.06 221.677 1469.41 201.434C1514.76 181.188 1558.65 152.648 1597.01 123.601C1635.37 94.5522 1668.21 64.9878 1691.46 42.6865C1703.08 31.5356 1712.31 22.1993 1718.63 15.6504C1721.79 12.376 1724.22 9.7986 1725.87 8.03906C1726.55 7.31049 1727.09 6.72064 1727.5 6.28125V380.5H0.5V60.4453C0.608638 60.5828 0.725583 60.7334 0.853516 60.8945C1.67558 61.9302 2.89385 63.45 4.47949 65.3877C7.651 69.2633 12.2934 74.8119 18.1768 81.5039C29.9429 94.8872 46.6775 112.849 66.5498 131.163C106.269 167.767 158.622 205.872 208.944 211.497C265.433 217.812 301.769 186.804 337.981 153.19C374.232 119.542 410.36 83.2918 466.543 78.498C505.919 75.1384 538.75 88.4272 568.208 109.468C597.681 130.52 623.743 159.305 649.589 186.913C675.413 214.499 701.028 240.916 729.56 257.106C758.124 273.315 789.62 279.28 827.167 265.972C886.25 245.03 902.503 187.994 919.011 132.331C935.553 76.5521 952.346 22.1576 1012.13 5.48145Z"
          fill="#A3AED0"
          stroke="#F5F7FA"
        />
      </svg>
      
      <svg
        className="absolute left-0 -bottom-20 z-2"
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="381"
        viewBox="0 0 1728 381"
        fill="none"
      >
        <path
          d="M0 59C0 59 108.702 199.788 209 211C321.481 223.574 353.728 87.6221 466.5 78C624.613 64.5092 677.43 318.516 827 265.5C944.606 223.814 891.812 38.5226 1012 4.99998C1159.24 -36.0686 1180.8 214.744 1333 229C1509.56 245.538 1728 4.99998 1728 4.99998V381H0V59Z"
          fill="#A3AED0"
        />
      </svg>
    </section>
  );
}
/* 
* Aqui basicamente agregue como nuevo las dos olitas, las exporte de svg del figma que hice
* y las puse en la parte de abajo del componente, una encima de la otra, la de arriba con un z-index menor para que se vea mas clara
* y la de abajo con un z-index mayor para que se vea mas opaca, ademas de que le puse una clase absoluta para posicionarlas bien, 
* de igual forma tuve que poner clase relativa la seccion padre para que las olas se posicionaran con respecto a esta
*/