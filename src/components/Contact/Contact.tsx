import { Nave } from "../About/Nave";
import { BtnFilled } from "../btn/BtnFilled";
export const Contact = () => {
/*  
*Aqui investigando es como algo de buena practica usar un usestate como el que nos enseñaron
*pero ya ando cansado y no lo veo necesario para este formulario, si quieren lo agrego despues
*/

  return (
    <section id="Contact" className="py-16 px-8 flex justify-center items-center min-h-screen gap-20">
      <div className="rotate-180">
        <Nave></Nave>
      </div>
      <div className="w-full max-w-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-[var(--color-text)] font-[Roboto_Condensed]">
          Contáctame
        </h2>
        <form
          className="bg-[var(--color-card)] p-8 rounded-2xl shadow-xl space-y-6 cursor-pointer hover:transform hover:scale-101 hover:shadow-2xl transition-transform duration-300"
        >
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:outline-none text-[var(--color-text)] font-[Open_Sans] bg-white transition-colors"
          />
          
          <input
            type="email"
            placeholder="Tu email"
            required
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:outline-none text-[var(--color-text)] font-[Open_Sans] bg-white transition-colors"
          />
          
          <textarea
            placeholder="Tu mensaje"
            required
            rows={3}
            className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-primary)] focus:outline-none text-[var(--color-text)] font-[Open_Sans] bg-white resize-none transition-colors"
          />
          
          <div className="flex justify-center">
            <BtnFilled
              color="--color-primary"
              letra="24px"
            >
              Enviar mensaje
              <img 
                src="/icons/arrow.svg"
                alt="Arrow Right Icon"
                className="inline-block ml-2 w-9 h-9"
              />
            </BtnFilled>
          </div>
        </form>
      </div>
    </section>
  );
};