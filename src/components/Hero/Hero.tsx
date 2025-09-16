import { BtnFilled } from "../btn/button_filled";
import { Moon } from "../moon";
import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
  return (
    <section>
      <SocialMedia />
      <div>
        <p className="pt-[20px] text-[var(--color-text)] text-center font-[Roboto_Condensed] text-[13vw] not-italic font-extrabold leading-normal">
          SETH MILLÁN
        </p>
        <div className=" flex mt-[-20px] absolute right-50 pt-40">
          <BtnFilled color={"--color-primary"} letra={"32px"}>
            KNOW MORE
          </BtnFilled>
        </div>
        <Moon />
      </div>
    </section>
  );
};
