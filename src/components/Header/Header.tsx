import { Navegation } from "./Navegation"
import './../../index.css'
import { SocialMedia } from "../Hero/SocialMedia"

export const Header = ()=>{
    return <header className="w-full left-0 ">
        <Navegation />
        <SocialMedia />
    </header>
}