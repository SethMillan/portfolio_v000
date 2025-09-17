import { BtnFilled } from "../btn/BtnFilled";
import { BtnOutlined } from "../btn/BtnOutlined";

// AboutMe.tsx
export default function AboutMe() {
  return (
    <section className="w-full h-[100vh] max-w-7xl mx-auto p-6 ">
      <p className="text-[var(--color-secondary)] font-[Roboto_Condensed] text-[42px] italic font-semibold leading-normal">
        🚀 ABOUT ME
      </p>
      <p className="pt-2 text-[var(--color-text)] font-[Roboto_Condensed] text-[54px] not-italic font-extrabold leading-normal">
        BEST PROJECT LEAD 
      </p>
      <p className="-mt-3 text-[var(--color-text)] font-[Roboto_Condensed] text-[54px] not-italic font-extrabold leading-normal">
        & DEVELOPER IN LATAM 
      </p>
      
      <p className="pt-2 text-[var(--color-text)] text-justify font-[Open_Sans] text-[28px] not-italic font-normal leading-[42px]">
        My professional goal is to create solutions that drive growth <br/> and digital transformation within organizations.
      </p>

      <div className="pt-8 flex justify-between items-center max-w-lg">
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
    </section>
  );
}
