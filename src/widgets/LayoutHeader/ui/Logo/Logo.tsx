import React from "react"
import { Link } from "react-router-dom"
import LogoIcon from "../../../../app/assets/icons/logo.svg"

export const Logo: React.FC = () => {
    return (
        <Link to={"/main"} className="justify-self-start">
            <LogoIcon />
        </Link>
    )
}
