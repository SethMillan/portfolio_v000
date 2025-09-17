import { BtnFilled } from "../btn/BtnFilled";

export const Card = ({
  title,
  description,
  checks,
  icon,
  color,
}: {
  title: string;
  description: string;
  checks: string[];
  icon: string;
  color: string;
}) => {
  return (
    <div className="bg-[var(--color-card)] p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-start  w-[380px] relative">
      <div className="barra" style={{ background: `var(${color})` }}></div>
      <div className="flex w-full flex-row justify-between">
        <h3 className="flex text-left items-start w-[150px] text-[var(--color-text)] font-[Roboto_Condensed] text-[35px] font-bold mb-2 mr-4>">
          {title}
        </h3>
        <img src={icon} alt={`${title} icon`} className="w-16 h-16 mb-4" />
      </div>
      <p className="text-[var(--color-text)] text-left font-[Open_Sans] text-[24px] font-light not-italic  w-[85%]">
        {description}
      </p>

      <ul className="mt-4 flex flex-col gap-2 items-start w-full">
        {checks.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-[var(--color-text)] font-[Open_Sans] text-[20px]"
          >
            <span style={{ color: `var(${color})` }} className="font-bold">
              ✔
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 w-full flex justify-end">
        <BtnFilled color={`${color}`} letra={"32px"}>
          Hire Me
          <img
            src="/icons/arrow.svg"
            alt="Arrow Right Icon"
            className="inline-block ml-2 w-9 h-9"
          />
        </BtnFilled>
      </div>

      <style>
        {`.barra{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 6px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;}
        `}
      </style>
    </div>
  );
};
