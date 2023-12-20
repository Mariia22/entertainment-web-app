import React from "react"
import { Link } from "react-router-dom"
import LogoIcon from "./../../../../../public/icons/logo.svg"

export const Logo: React.FC = () => {
    return (
        <Link to={"/"} className="justify-self-start">
            <LogoIcon />
        </Link>
    )
}
