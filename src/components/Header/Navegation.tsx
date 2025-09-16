export const Navegation = ()=>{
    return (
    <nav className="uppercase flex justify-end mt-[38px] text-[#2E3A59] text-center font-['Roboto_Condensed'] text-[20px] not-italic font-extrabold  mr-[37px]">
        <a href="/" className="transition duration-200 hover:scale-110 hover:text-[var(--color-primary)] cursor-pointer">Home</a>
        <a href="/about" className="transition duration-200 hover:scale-110 hover:text-[var(--color-primary)] cursor-pointer">About</a>
        <a href="/contact" className="transition duration-200 hover:scale-110 hover:text-[var(--color-primary)] cursor-pointer">Service</a>
        <a href="/contact" className="transition duration-200 hover:scale-110 hover:text-[var(--color-primary)] cursor-pointer">Projects</a>
        <a href="/contact" className="transition duration-200 hover:scale-110 hover:text-[var(--color-primary)] cursor-pointer">Blog</a>
        <a href="/contact" className="transition duration-200 hover:scale-110 hover:text-[var(--color-primary)] cursor-pointer">Contact</a>
    </nav>
    );
}