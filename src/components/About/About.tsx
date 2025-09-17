import { BtnFilled } from "../btn/BtnFilled";
import { BtnOutlined } from "../btn/BtnOutlined";
import { Nave } from "./Nave";
import { Stats } from "./Stats";

// AboutMe.tsx
export default function AboutMe() {
  return (
    <section className="w-full h-[100vh] mx-auto p-6 flex">
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
        My professional goal is to create solutions that drive growth <br/> and digital transformation within organizations.
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
    </section>
  );
}
