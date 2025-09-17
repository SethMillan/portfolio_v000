import { Nave } from "../About/Nave";
import { Card } from "./Card";

export const Service = () => {
  return (
    <div className="h-[120vh] flex flex-col items-center justify-center gap-10 bg-[var(--background-secondary)] py-20 px-5 relative">
      <h3 className="text-[#2E3A59] font-['Roboto_Condensed'] text-[56px] font-extrabold">
        Service
      </h3>
      <div className="flex w-[80%] justify-center items-center gap-15 z-4 bg-[var(--background-secondary)]">
        <Card
          title={"Software Development"}
          description={
            "Create custom web and mobile applications that perfectly adapt to your business needs"
          }
          checks={[
            "Responsive web applications",
            "REST API development",
            "System integrations",
            "Performance optimization",
          ]}
          icon={"./icons/code.svg"}
          color={"--color-primary"}
        />
        <div className="rotate-12">
          <Nave></Nave>
        </div>

        <Card
          title={"UI/UX Design"}
          description={
            "Design intuitive and engaging digital experiences that users love and remember"
          }
          checks={[
            "User interface design",
            "User experience research",
            "Interactive prototypes",
            "Design systems & guides",
          ]}
          icon={"./icons/palette.svg"}
          color={"--color-secondary"}
        />
      </div>
      <div className="bg-[var(--background-secondary)] absolute bottom-10 h-8 w-full z-4"></div>
      <svg
        className="absolute left-0 -bottom-52 z-3"
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="280"
        viewBox="0 0 1728 280"
        fill="none"
      >
        <path
          d="M1727.5 0.5V146.708C1727.48 146.718 1727.46 146.728 1727.45 146.738C1727.24 146.853 1726.94 147.022 1726.54 147.244C1725.74 147.688 1724.55 148.338 1723.02 149.167C1719.95 150.825 1715.48 153.196 1709.89 156.043C1698.69 161.737 1682.99 169.339 1664.94 176.967C1628.82 192.231 1583.4 207.572 1545.99 208C1495.94 208.573 1462.16 179.696 1428.3 152.022C1394.48 124.38 1360.58 97.9461 1310.44 104.004C1265.49 109.435 1239.99 139.301 1214.62 168.971C1189.23 198.676 1163.96 228.186 1119.44 233.504C1073.52 238.988 1041.45 215.447 1009.17 191.344C976.933 167.269 944.481 142.632 897.959 146.502C849.464 150.536 821.049 183.255 792.745 214.998C764.402 246.786 736.169 277.598 687.99 278.5C657 279.08 634.178 266.712 615.411 247.738C596.623 228.743 581.916 203.146 567.171 177.285C552.442 151.451 537.676 125.353 518.787 105.489C499.88 85.6062 476.821 71.9437 445.515 71C392.398 69.399 359.863 108.653 327.738 145.639C295.538 182.712 263.765 217.498 212.09 208.008C180.612 202.226 162.541 178.161 144.211 155.952C125.925 133.797 107.371 113.495 74.9619 116.002C59.0982 117.229 40.275 124.892 25.457 132.217C18.0395 135.883 11.609 139.472 7.0332 142.146C4.74517 143.482 2.92042 144.59 1.66699 145.364C1.19487 145.656 0.804217 145.901 0.5 146.092V0.5H1727.5Z"
          fill="#A3AED0"
          stroke="#F5F7FA"
        />
      </svg>
      <svg
        className="absolute left-0 -bottom-54 z-2"
        xmlns="http://www.w3.org/2000/svg"
        width="full"
        height="280"
        viewBox="0 0 1728 280"
        fill="none"
      >
        <path
          d="M0 0H1728V147C1728 147 1621.02 207.641 1546 208.5C1445.47 209.652 1410.31 92.4406 1310.5 104.5C1221.03 115.31 1208.98 223.312 1119.5 234C1027.22 245.022 990.615 139.296 898 147C801.468 155.029 784.849 277.187 688 279C563.382 281.332 570.083 75.2556 445.5 71.5C339.824 68.3144 315.985 227.597 212 208.5C148.614 196.859 139.254 111.528 75 116.5C43.4756 118.939 0 147 0 147V0Z"
          fill="#A3AED0"
        />
      </svg>
    </div>
  );
};
/*
* Aqui tambien agregue los svg del figma para que se vieran hasta abajo, y de igual forma le puse posicion relativa a la seccion padre
* para que las olas se posicionaran con respecto a esta, ademas de que le puse una clase absoluta a las olas para posicionarlas bien
* y un z-index por que una tiene un bordeo claro y queria que se remarcara sobre la otra jaja
*/
