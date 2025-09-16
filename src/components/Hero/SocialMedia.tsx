import './../../index.css'
export const SocialMedia = ()=>{
    return (
        <div className="absolute flex flex-col gap-6 mt-8 left-[33px] items-center">
        <div className=" w-[1px] h-[180px] bg-[#2E3A5980]"></div>
        <a href="https://www.facebook.com/profile.php?id=100014107354913" target="_blank">
            <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6"/>
        </a>
        <a href="https://github.com/SethMillan" target="_blank">
            <img src="/icons/github.png" alt="GitHub" className="w-6 h-6"/>
        </a>
        <a href="https://www.instagram.com/millan_sutekh/" target="_blank" >
            <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6"/>
        </a>
        <a href="https://www.linkedin.com/in/mill%C3%A1n-d-sutekh17/" target="_blank">
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6"/>
        </a>
        <div className=" w-[1px] h-[180px] bg-[#2E3A5980]"></div>
        </div>
    );
}