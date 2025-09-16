import { BtnFilled } from "../btn/button_filled";
import { Moon } from "./moon";
import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
  return (
    <section>
      <SocialMedia />
      <div>
        <p className="pt-[20px] text-[var(--color-text)] text-center font-[Roboto_Condensed] text-[13vw] not-italic font-extrabold leading-normal">
          SETH MILLÁN
        </p>
        <div className="flex flex-row items-center justify-center gap-18">
          <Moon />
          <div className="">
            <BtnFilled color={"--color-primary"} letra={"3vw"}>
              KNOW MORE
            </BtnFilled>
          </div>
        </div>
      </div>
    </section>
  );
};
