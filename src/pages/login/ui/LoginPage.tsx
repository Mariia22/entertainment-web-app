import React, { useState } from "react"
import { Logo } from "../../../widgets/LayoutHeader/ui/Logo/Logo"

export const LoginPage: React.FC = () => {
    const [isLogin] = useState(true)

    return (
        <main>
            <Logo />
            {isLogin ? <div>LoginPage</div> : <div>SignUp Page</div>}
        </main>
    )
}
